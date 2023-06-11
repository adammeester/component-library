import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import depsExternal from 'rollup-plugin-node-externals';
import typescript from '@rollup/plugin-typescript';

const dtsConfig = {
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@theme': ['src/theme/theme.ts'],
      '@components': ['src/components.ts'],
      '@keyframes': ['src/keyframes/keyframes.ts'],
    },
  },
};

export default defineConfig([
  {
    input: [
      'src/index.ts',
      'src/components/index.ts',
      'src/theme/index.ts',
      'src/keyframes/index.ts',
    ],
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
      entryFileNames({ name, facadeModuleId }) {
        return facadeModuleId?.includes('css.ts')
          ? `${name.replace('css', 'component-library.css')}.ts`
          : `${name}.js`;
      },
      exports: 'named',
    },
  },
  {
    input: 'src/index.ts',
    plugins: [dts(dtsConfig)],
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  },
  {
    input: 'src/components/index.ts',
    plugins: [dts(dtsConfig)],
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  },
  {
    input: 'src/theme/index.ts',
    plugins: [dts(dtsConfig)],
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  },
  {
    input: 'src/keyframes/index.ts',
    plugins: [dts(dtsConfig)],
    output: {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  },
]);
