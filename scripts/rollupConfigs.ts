import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import type { RollupOptions } from 'rollup';
import { dts } from 'rollup-plugin-dts';

import packageJson from '../package.json' with { type: 'json' };

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const PATH_INPUT_FILE = 'src/index.ts';
const PATH_TSCONFIG_BUILD = 'scripts/tsconfig.build.json';

export const LEGACY_CONFIG = [
  {
    input: PATH_INPUT_FILE,
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !IS_PRODUCTION,
      },
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !IS_PRODUCTION,
      },
    ],
    plugins: [
      typescript({
        tsconfig: PATH_TSCONFIG_BUILD,
        sourceMap: !IS_PRODUCTION,
      }),
      terser({
        format: { comments: false },
        compress: {
          pure_getters: true,
        },
        toplevel: true,
      }),
    ],
    // Ensure dependencies are not bundled with the library
    external: [...Object.keys(packageJson.peerDependencies), 'react/jsx-runtime'],
  },
  {
    input: PATH_INPUT_FILE,
    output: { file: packageJson.types, format: 'esm' },
    plugins: [dts({ tsconfig: PATH_TSCONFIG_BUILD })],
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
      },
      {
        file: packageJson.exports.require.default,
        format: 'cjs',
        sourcemap: !IS_PRODUCTION,
      },
    ],
    plugins: [
      typescript({
        tsconfig: PATH_TSCONFIG_BUILD,
        sourceMap: !IS_PRODUCTION,
      }),
      terser({
        format: { comments: false },
        compress: {
          pure_getters: true,
        },
        toplevel: true,
      }),
    ],
    // Ensure dependencies are not bundled with the library
    external: [...Object.keys(packageJson.peerDependencies), 'react/jsx-runtime'],
  },
  {
    input: PATH_INPUT_FILE,
    output: [
      { file: packageJson.exports.import.types, format: 'esm' },
      { file: packageJson.exports.require.types, format: 'cjs' },
    ],
    plugins: [dts({ tsconfig: PATH_TSCONFIG_BUILD })],
  },
] as const satisfies ReadonlyArray<RollupOptions>;
