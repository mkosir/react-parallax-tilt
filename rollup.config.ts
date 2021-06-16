import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import { defineConfig } from 'rollup';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

export default defineConfig({
  input: `src/index.ts`,
  output: [
    {
      file: pkg.main,
      name: 'react-parallax-tilt',
      format: 'umd',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  // ensure that the dependencies are not bundled with the library (installed automatically within the parent app)
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    resolve(),
    // Resolve source maps to the original source
    sourceMaps(),
    terser({
      output: { comments: false },
      compress: {
        pure_getters: true,
      },
      ecma: 5,
      // Compress and/or mangle variables in top level scope.
      toplevel: true,
    }),
  ],
});
