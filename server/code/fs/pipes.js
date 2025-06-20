import fs from "fs";
import zlib from "zlib";

const read = fs.createReadStream("./sample-large.txt")
const write = fs.createWriteStream('./written.txt')

const writeZip = fs.createWriteStream('./written-zip.gz')

const gzip =  zlib.createGzip()
read.pipe(gzip).pipe(writeZip)

read.pipe(write)