import path from 'path';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = 'fileToRead.txt';

const read = async () => {
    const filePath = path.resolve(__dirname, 'files', fileName);
    const readStream = createReadStream(filePath, {encoding: 'utf8'})

    readStream.pipe(stdout);
};

await read();