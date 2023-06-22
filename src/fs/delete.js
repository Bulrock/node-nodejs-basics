import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const removedFileName = 'fileToRemove.txt';

const remove = async () => {
    const removedFilePath = path.resolve(__dirname, 'files', removedFileName);

    try {
        await fs.unlink(removedFilePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();