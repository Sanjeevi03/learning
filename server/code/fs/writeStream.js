import { randomBytes } from "crypto";
import fs from "fs"


async function writeData() {
  const stream = fs.createWriteStream('./sample-large.txt')

  const chunkSize = 1024 * 1024; // 1MB
  const totalChunks = 1;

  for (let i = 0; i < totalChunks; i++) {
    const randomData = randomBytes(chunkSize).toString('hex'); // 2MB of hex data
    stream.write(randomData + '\n');
  }

  stream.end();

}

writeData()