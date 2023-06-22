import { writeFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileName = 'fresh.txt';
const data = 'I am fresh and young';

const create = async () => {
    try {
        await writeFile(path.resolve(__dirname, 'files', fileName), data, {flag: 'wx'});
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();