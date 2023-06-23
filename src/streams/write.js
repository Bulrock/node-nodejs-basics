import path from 'path';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { stdin } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = 'fileToWrite.txt';

const write = async () => {
    const filePath = path.resolve(__dirname, 'files', fileName);
    const writeStream = createWriteStream(filePath, {encoding: 'utf8'})

    stdin.pipe(writeStream);
};

await write();