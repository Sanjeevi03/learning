import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import router from "./router.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import fs from "fs";
import csv from "csv-parser";

configDotenv();

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('mongo db connected')
})

const app = express();

app.use(rateLimit)

app.use(express.json());

app.use(router)

app.post('/login', async (req, res) => {
  const { user } = req.body;

  const token = await jwt.sign({ user}, 'secret', { expiresIn: '15s'})

  console.log(token)

  res.send(token)
})

app.get("/", auth, (req, res, next) => {
  res.status(200).send("Hello world...."+  JSON.stringify(req.user))
})

const upload = multer({ dest: 'uploads/' });

app.post('/up', upload.single('file'), async(req, res) => {
  const path = req.file.path;
  console.log(path)

  // if(ext  == '/.csv') {
  //   const data = new Promise((res, rej) => {
  //   let resu = []
  //   fs.createReadStream(path).pipe(csv()).on('data', (data) => resu.push(data)).on('end', ()=> res(resu)).on('error', (err) => rej(err));
  // }) 

  // console.log(await data)
  // } else {
    console.log('sel')
    const fileContent = await fs.readFileSync(req.file.path, 'utf-8');
    let x = JSON.parse(fileContent);
    console.log(await x)
  // }

  fs.unlinkSync(path)
  res.send('parsed')

})

const port = process.env.PORT
app.listen(port,  () => {
  console.log('server started');
});

const store = {}
function rateLimit(req, res, next) {
  try {
    const ip = req.ip;

    
    const max = 10;
    const now = Date.now();
    const timeout = 5000
    const arr = store[ip]?.filter(i => (now - i <= timeout)) || []
    if(arr.length >= max) {
      return res.status(429).send("Too many req")
    }
    arr.push(now)
    store[ip] = arr
    next()

  } catch(e) {
    console.log(e)
    res.send(500)
  }
}

async function auth(req, res, next) {

  const token = req.headers.authorization.split(" ")[1];

  console.log('toek in auth', token)

  if(token) {
    const n = await jwt.verify(token, 'secret');
    req.user = n
    next()
    return
  }

  res.send(400)


}