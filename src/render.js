import os from 'node:os';
import ms from 'ms';
import { readFileENX } from './readFileENX.js';

export async function render() {

    const user = os.userInfo();
    const shell = user.shell.split('/').pop();

    console.log(user.username);
    console.log(`${shell}\n`);

    console.log(os.platform());
    console.log(`Machine type: ${os.machine()}`);
    console.log(`Architecture: ${os.arch()}\n`);

    await readFileENX(os.networkInterfaces);

    console.log(`PC power-on time: ${ms(os.uptime() * 1000)}\n`);

    const porsentaje = Math.floor(os.freemem() / 1e9) / Math.floor(os.totalmem() / 1e9) * 100
    const porsentajeusdo = 100 - Math.floor(os.freemem() / 1e9) / Math.floor(os.totalmem() / 1e9) * 100

    console.log(`Total RAM memory: ${Math.floor(os.totalmem() / 1e9)}GB`);
    console.log(`Remain: ${Math.floor(os.freemem() / 1e9)}GB   ${porsentaje}% | Used ${porsentajeusdo}%`);
} 
