import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const folderPath = path.resolve(__dirname, 'files');

    try {
        const list = await fs.readdir(folderPath);
        console.log(list);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();