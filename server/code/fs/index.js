import { readFile, writeFile, appendFile} from "fs/promises";

import path from "path";


async function call() {
  try {
    // await writeFile('./test.js',  'console.log("sanjeevi")', { flag: 'a' })
    // await writeFile('./test.js', 'console.log("sanjeevi 2")', { flag: 'a' })


    // const r = await readFile('./test.js', 'utf-8')
    // console.log(r)

    // await appendFile('./test.js', '\nsanjeevi')


    // path - provide utilities for working with file and dir paths


    // console.log(path.resolve('test.js'))
    // console.log(path.resolve())

    // console.log(path.resolve())

    console.log(path.join('test', 'code', 'index.js'))
    console.log(path.join(__dirname, 'index.js'))



  } catch(e) {
    console.log(e.message)
  }
}


call()