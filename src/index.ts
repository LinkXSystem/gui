export { Box, Toolbar, Tool, Icon } from './components';

import { Runtime } from './runtime';
import { render } from './render';
import { register } from './register';

function getRuntime() {
    return Runtime.getInstance();
}

export default {
    getRuntime,
    render,
    register
}