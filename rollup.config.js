import json from '@rollup/plugin-json';
// import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import resolve from '@rollup/plugin-node-resolve';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import depsExternal from 'rollup-plugin-node-externals';
import ts from 'typescript';
import typescript from '@rollup/plugin-typescript';

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
const resolveExtensions = ['.js', '.jsx', '.ts', '.tsx'];
const compilerOptions = loadCompilerOptions('tsconfig.json');
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'core-js': 'core-js',
  '@vanilla-extract/css': '@vanilla-extract/css',
};

const globalModules = Object.keys(globals);

const plugins = [
  // vanillaExtractPlugin(),
  depsExternal(),
  esbuild(),
  json(),

  //next config
  resolve({ extensions: resolveExtensions }),
  postcss(),
  // commonjs({
  //   include: '**/node_modules/**',
  // }),
  //
  typescript({
    allowJs: true,
    jsx: 'react',
    tsconfig: './tsconfig.json',
  }),
];

export default [
  {
    input: ['src/index.ts'],
    plugins,
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
        exports: 'auto',
        //next config
        globals,
        generatedCode: {
          constBindings: true,
        },
        treeshake: false,
        //
        // need this when consuming app doesn't know about
        // Change .css.js files to something else so that they don't get re-processed by consumer's setup
        // entryFileNames({ name }) {
        //   return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
        // },

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
    external: (id) => globalModules.includes(id) || /core-js/.test(id),
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
