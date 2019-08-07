import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');

export default {
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
  // this will ensure that the dependencies are not bundled with our library, but are instead
  // installed (automatically) within the parent app
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
    postcss({
      plugins: [],
    }),
    // Resolve source maps to the original source
    sourceMaps(),
    terser({
      sourcemap: true,
      output: { comments: false },
      compress: {
        pure_getters: true,
      },
      warnings: true,
      ecma: 5,
      // Compress and/or mangle variables in top level scope.
      // @see https://github.com/terser-js/terser
      toplevel: true,
    }),
  ],
};
