import fs from 'fs/promises';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');
    
    try {
        const secret = await fs.readFile(filePath, {encoding: 'utf8'})
        const hash = crypto.createHmac('sha256', secret)
                   .digest('hex');
        console.log(hash);
    } catch (err){
        console.log(err);
    }
};

await calculateHash();