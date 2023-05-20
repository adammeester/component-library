/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';

import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

const isNextJsConfig = true;

const resolveExtensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'core-js': 'core-js',
  '@vanilla-extract/css': '@vanilla-extract/css',
};

const globalModules = Object.keys(globals);

const additionalOutputConfig = isNextJsConfig
  ? {
      globals,
      generatedCode: {
        constBindings: true,
      },
      treeshake: false,
    }
  : {
      entryFileNames: ({ name }) => {
        return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
      },
      generatedCode: 'es2015',
    };

const additionalPlugins = isNextJsConfig ? [] : [vanillaExtractPlugin()];

const additionalConfig = isNextJsConfig
  ? {
      external: (id) => globalModules.includes(id) || /core-js/.test(id),
    }
  : {};

export default {
  input: ['src/index.ts'],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
    exports: 'auto',
    assetFileNames: ({ name }) => {
      return name.replace(/^src\//, '');
    },
    ...additionalOutputConfig,
  },
  plugins: [
    del({ targets: 'dist/*' }),
    json(),
    // renameNodeModules('js_modules'),
    peerDepsExternal(),
    resolve(isNextJsConfig ? { extensions: resolveExtensions } : undefined),
    commonjs(
      isNextJsConfig
        ? {
            include: '**/node_modules/**',
          }
        : undefined
    ),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    ...additionalPlugins,
    postcss(),
    terser(),
  ],
  ...additionalConfig,
};
