import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
// import dts from 'rollup-plugin-dts';
//@ts-ignore types package is broken - https://www.npmjs.com/package/@types/rollup-plugin-size-snapshot
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

import packageJson from './package.json';
// import tsConfig from './tsconfig.base.json';

const isProduction = process.env.NODE_ENV === 'production';

const rollupConfig = defineConfig([
  {
    input: 'src/index.ts',
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
        // Compress and/or mangle variables in top level scope.
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
      //...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {}),
    ],
  },
  // {
  //   input: 'src/types.d.ts',
  //   output: { file: packageJson.types, format: 'esm' },
  //   plugins: [
  //     dts({
  //       compilerOptions: {
  //         baseUrl: tsConfig.compilerOptions.baseUrl,
  //         paths: tsConfig.compilerOptions.paths,
  //       },
  //     }),
  //   ],
  // },
]);

// eslint-disable-next-line
export default rollupConfig;
