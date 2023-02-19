import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';

import packageJson from './package.json' assert { type: 'json' };
import tsConfig from './tsconfigs/tsconfig.base.json' assert { type: 'json' };

const isProduction = process.env.NODE_ENV === 'production';

const inputFile = 'src/index.ts';

const rollupConfig = defineConfig([
  {
    input: inputFile,
    output: [
      {
        file: packageJson.main,
        name: packageJson.name,
        format: 'umd',
        sourcemap: !isProduction,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !isProduction,
      },
    ],
    plugins: [
      commonjs(),
      typescript({
        tsconfig: './tsconfigs/tsconfig.prod.json',
        sourceMap: !isProduction,
      }),
      terser({
        output: { comments: false },
        compress: {
          pure_getters: true,
        },
        toplevel: true,
      }),
    ],
    // Ensure dependencies are not bundled with the library
    external: [
      ...Object.keys(packageJson.peerDependencies),
      // ...Object.keys(packageJson.dependencies ?? {}),
    ],
  },
  {
    input: inputFile,
    output: { file: packageJson.types, format: 'esm' },
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: './src',
          paths: tsConfig.compilerOptions.paths,
        },
      }),
    ],
  },
]);

// eslint-disable-next-line
export default rollupConfig;
