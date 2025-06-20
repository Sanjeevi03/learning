import { Worker } from "worker_threads";
// import http from "http";

// const server = http.createServer((req, res) => {
//   if(req.url == '/') {
//     res.writeHead(200)
//     res.end("Home page")
//   } else if(req.url == '/get') {
//     const worker = new Worker('./worker.js')
//     worker.on('message', (data) => {
//       console.log('data', data)
//       res.writeHead(200)
//       res.end("get page"+ data.result)
//     })
//   } else {
//     res.writeHead(404)
//     res.end("Not found")
//   }
// })

// server.listen(5000, () => {
//   console.log("Server started")
// })

import express from "express";

const app = express()


app.get("/", (_, res) => {
  res.send("Home page")
})

app.get("/get", (_, res) => {
  const worker = new Worker('./worker.js')
  worker.on('message', (data) => {
    console.log('data', data)
    res.send("get page"+ data.result)
  })  
})



app.listen(5000, () => {
  console.log("Server started")
});
