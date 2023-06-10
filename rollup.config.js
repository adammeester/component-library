import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import depsExternal from 'rollup-plugin-node-externals';
import typescript from '@rollup/plugin-typescript';

// I use some path aliasing, you can ignore this
const dtsConfig = {
  compilerOptions: {
    baseUrl: '.',
    // paths: {
    //   '@themes': ['src/themes/themes.ts'],
    //   '@components': ['src/components.ts'],
    // },
  },
};

export default defineConfig([
  {
    input: ['src/index.ts', 'src/components/index.ts', 'src/theme/index.ts'],
    plugins: [
      depsExternal(),
      typescript({
        exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
        declaration: false,
        declarationMap: false,
      }),
    ],
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      // Preserves .ts file extenstion on css.ts files
      entryFileNames({ name, facadeModuleId }) {
        return facadeModuleId?.includes('css.ts')
          ? `${name.replace('css', 'component-library.css')}.ts`
          : `${name}.js`;
      },
      exports: 'named',
    },
  },
  {
    input: 'src/index.ts', // <--- I split `.css.ts` files into their own barrel/export
    plugins: [dts(dtsConfig)],
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  },
  {
    input: 'src/components/index.ts', // <-- React component barrel
    plugins: [dts(dtsConfig)],
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  },
]);
