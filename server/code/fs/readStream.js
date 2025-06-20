import fs from "fs"


async function readData() {
  const stream = fs.createReadStream('./sample-large.txt', {
    encoding:"utf-8",
    highWaterMark: 5
  })

  const write = fs.createWriteStream('./written.txt')

  
  stream.on('data', (data) => {
    console.log(data)
    write.write(data)
  })

}

readData()