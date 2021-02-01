import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

const input = 'bin/index.js';

export default [
    {
        input,
        output: {
            file: 'bundled/gui.js',
            format: 'iife',
            name: 'gui'
        },
        plugins: [resolve(), terser()]
    },
    {
        input,
        output: {
            file: 'bundled/gui.esm.js',
            format: 'esm'
        },
        plugins: [resolve(), terser()]
    },
    {
        input,
        output: {
            file: 'bundled/gui.cjs.js',
            format: 'cjs'
        },
        plugins: [resolve(), typescript({ target: "es5" }), terser()]
    }
];