import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

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
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
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
    visualizer({
      filename: 'bundle-analysis.html',
      open: true,
    }),
  ],
});
