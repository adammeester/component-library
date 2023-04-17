import json from '@rollup/plugin-json';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import path from 'path';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import depsExternal from 'rollup-plugin-node-externals';
import ts from 'typescript';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

const loadCompilerOptions = (tsconfig) => {
  if (!tsconfig) return {};
  const configFile = ts.readConfigFile(tsconfig, ts.sys.readFile);
  const { options } = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    './'
  );
  return options;
};

const compilerOptions = loadCompilerOptions('tsconfig.json');

const plugins = [
  vanillaExtractPlugin(),
  depsExternal(),
  esbuild(),
  json(),
  // postcss({
  //   extract: true,
  //   modules: true,
  // }),
  typescript({
    // include: ['src/**/*.ts', 'src/**/*.tsx'],
    allowJs: true, // Allow JavaScript files to be compiled
    jsx: 'react', // Compile JSX to React.createElement calls
  }),
  copy({
    targets: [{ src: 'package.json', dest: 'dist' }],
  }),
];

export default [
  {
    input: 'src/index.ts',
    plugins,
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',

        // Change .css.js files to something else so that they don't get re-processed by consumer's setup
        entryFileNames({ name }) {
          return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
        },

        // Apply preserveModulesRoot to asset names
        assetFileNames({ name }) {
          return name.replace(/^src\//, '');
        },

        exports: 'named',
      },
    ],
  },
  // Declaration files
  {
    input: 'src/index.ts',
    plugins: [
      ...plugins,
      dts({
        compilerOptions: {
          ...compilerOptions,
          baseUrl: path.resolve(compilerOptions.baseUrl || '.'),
          declaration: true,
          noEmit: false,
          emitDeclarationOnly: true,
          noEmitOnError: true,
          target: ts.ScriptTarget.ESNext,
        },
      }),
    ],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
  },
];