#!/usr/bin/env node

import { render } from './render.js';

setInterval(() => {
    console.clear()

    setTimeout(() => {render()}, 200)

}, 5000);