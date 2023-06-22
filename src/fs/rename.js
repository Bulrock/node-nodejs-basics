import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const oldFileName = 'wrongFilename.txt';
const newFileName = 'properFilename.md';

const rename = async () => {
    const oldPath = path.resolve(__dirname, 'files', oldFileName);
    const newPath = path.resolve(__dirname, 'files', newFileName);
    try {
        await fs.rename(oldPath, newPath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();