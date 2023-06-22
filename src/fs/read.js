import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = 'fileToRead.txt';

const read = async () => {
    const filePath = path.resolve(__dirname, 'files', fileName);

    try {
        const content = await fs.readFile(filePath, {encoding: 'utf8'})
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();