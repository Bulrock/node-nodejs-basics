import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const fileToCompressName = 'fileToCompress.txt';
    const compressedFileName = 'archive.gz';
    const fileToCompressPath = path.resolve(__dirname, 'files', fileToCompressName)
    const compressedFilePath = path.resolve(__dirname, 'files', compressedFileName)

    pipeline(
        createReadStream(fileToCompressPath),
        createGzip(),
        createWriteStream(compressedFilePath),
        (err) => console.error(err)
    )
};

await compress();