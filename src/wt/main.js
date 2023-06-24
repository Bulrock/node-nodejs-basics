import { Worker } from 'worker_threads';
import { availableParallelism } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INITIAL_NUMBER = 10;
const workerPath = path.resolve(__dirname, 'worker.js');

const fibonacciWorkerService = (number) => new Promise (resolve => {
    const worker = new Worker(workerPath, {workerData: number});

    worker.on('message', data => resolve({
        status: 'resolved',
        data
    }));

    worker.on('error', data => resolve({
        status: 'error',
        data: null
    }));
})

const performCalculations = async () => {
    const workersPool = Array.from({length: availableParallelism()}, (_, i) => fibonacciWorkerService(INITIAL_NUMBER + i))
    const result = await Promise.all(workersPool);
    console.log(result);
};

await performCalculations();