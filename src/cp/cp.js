import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const childModuleName = 'script.js'
const childModule = path.resolve(__dirname, 'files', childModuleName);

const spawnChildProcess = async (args) => {
    fork(childModule, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['a', 'b', 'c', 1, 2, 3]);
