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
    entryFileNames({ name }) {
      return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
    },
    generatedCode: 'es2015',
  },
  plugins: [
    del({ targets: 'dist/*' }),
    json(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    vanillaExtractPlugin({
      cssFile: '@vanilla-extract/css/dist/vanilla-extract-css.cjs.js',
      alias: {
        '@vanilla-extract/recipes':
          '@vanilla-extract/recipes/dist/vanilla-extract-recipes.cjs.js',
      },
    }),
    postcss(),
    terser(),
  ],
};
