import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import type { GlobalsOption, RollupOptions } from 'rollup';
import { dts } from 'rollup-plugin-dts';

import packageJson from '../package.json' with { type: 'json' };

import tsConfig from './tsconfig.base.json' with { type: 'json' };

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const PATH_INPUT_FILE = 'src/index.ts';
const PATH_TSCONFIG_BUILD = 'scripts/tsconfig.build.json';

const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
} as const satisfies GlobalsOption;

export const LEGACY_CONFIG = [
  {
    input: PATH_INPUT_FILE,
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !IS_PRODUCTION,
        globals: GLOBALS,
      },
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !IS_PRODUCTION,
        globals: GLOBALS,
      },
    ],
    plugins: [
      commonjs(),
      typescript({
        tsconfig: PATH_TSCONFIG_BUILD,
        sourceMap: !IS_PRODUCTION,
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
    external: [...Object.keys(packageJson.peerDependencies)],
  },
  {
    input: PATH_INPUT_FILE,
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
] as const satisfies ReadonlyArray<RollupOptions>;

export const MODERN_CONFIG = [
  {
    input: PATH_INPUT_FILE,
    output: [
      {
        file: packageJson.exports.import.default,
        format: 'esm',
        sourcemap: !IS_PRODUCTION,
        globals: GLOBALS,
      },
      {
        file: packageJson.exports.require.default,
        format: 'cjs',
        sourcemap: !IS_PRODUCTION,
        globals: GLOBALS,
      },
    ],
    plugins: [
      commonjs(),
      typescript({
        tsconfig: PATH_TSCONFIG_BUILD,
        sourceMap: !IS_PRODUCTION,
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
    external: [...Object.keys(packageJson.peerDependencies)],
  },
  {
    input: PATH_INPUT_FILE,
    output: [
      { file: packageJson.exports.import.types, format: 'esm' },
      { file: packageJson.exports.require.types, format: 'cjs' },
    ],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: './src',
          paths: tsConfig.compilerOptions.paths,
        },
      }),
    ],
  },
] as const satisfies ReadonlyArray<RollupOptions>;
