import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
// @ts-expect-error types package is broken - https://www.npmjs.com/package/@types/rollup-plugin-size-snapshot
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

import packageJson from './package.json';
import tsConfig from './tsconfig.base.json';

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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      sizeSnapshot({ matchSnapshot: Boolean(process.env.MATCH_SNAPSHOT) }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.prod.json',
      }),
      terser({
        output: { comments: false },
        compress: {
          pure_getters: true,
        },
        toplevel: true,
      }),
      visualizer({
        filename: 'bundle-analysis.html',
        title: `${packageJson.name} - Rollup Visualizer`,
        open: false,
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
          baseUrl: tsConfig.compilerOptions.baseUrl,
          paths: tsConfig.compilerOptions.paths,
        },
      }),
    ],
  },
]);

// eslint-disable-next-line
export default rollupConfig;
