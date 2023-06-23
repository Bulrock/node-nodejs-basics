import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const fileToDecompressName = 'archive.gz';
    const DecompressedFileName = 'DecompressedFile.txt';
    const fileToDecompressPath = path.resolve(__dirname, 'files', fileToDecompressName)
    const DecompressedFilePath = path.resolve(__dirname, 'files', DecompressedFileName)

    pipeline(
        createReadStream(fileToDecompressPath),
        createGunzip(),
        createWriteStream(DecompressedFilePath),
        (err) => console.error(err)
    )
};

await decompress();