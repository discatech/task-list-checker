import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',  // Change this to 'esm' for ES modules
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
  ],
};
