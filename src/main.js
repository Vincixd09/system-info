import * as cmd from 'child_process';
import { render } from './render.js';

setInterval(() => {
    cmd.exec('clear', (error, stdout, stderr) => {
        if (error) {
            console.error(stderr);
            return;
        }
        console.log(stdout);
    })

    setTimeout(() => {render()}, 200)

}, 5000);