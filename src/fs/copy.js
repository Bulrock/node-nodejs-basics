import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sourcePath = 'files';
const destPath = 'files_copy';

const copy = async () => {
    try {
      await fs.cp(path.resolve(__dirname, sourcePath), path.resolve(__dirname, destPath), { recursive: true, force: false, errorOnExist: true });
    } catch {
      throw new Error('FS operation failed');
    }
};

await copy();
