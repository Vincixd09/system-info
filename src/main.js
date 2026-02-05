import * as cmd from 'child_process';
import { render } from './render.js';

setInterval(() => {
    console.clear()

    setTimeout(() => {render()}, 200)

}, 5000);