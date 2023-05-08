import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import nodeResolvePlugin from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  external: [/node_modules/],
  input: 'src/index.ts',
  plugins: [
    nodeResolvePlugin(),
    typescript({ declaration: true, declarationDir: 'dist' }),
    vanillaExtractPlugin(),
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    assetFileNames({ name }) {
      return (
        name
          ?.replace(/^src\//, '')
          .replace(/\.css\.ts\.vanilla\.css$/, '.css') ?? ''
      );
    },
  },
};
