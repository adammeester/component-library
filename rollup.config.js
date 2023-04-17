import typescript from '@rollup/plugin-typescript';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    preserveModules: true,
  },
  plugins: [
    vanillaExtractPlugin(),
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
  ],
};
