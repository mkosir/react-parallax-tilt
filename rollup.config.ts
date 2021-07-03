import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

const pkg = require('./package.json');

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: pkg.module,
      name: pkg.name,
      format: 'umd',
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'types',
    }),
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
      title: `${pkg.name} - Rollup Visualizer`,
      open: true,
    }),
  ],
  // ensure that the dependencies are not bundled with the library (installed automatically within the parent app)
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
});
