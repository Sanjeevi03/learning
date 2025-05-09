
// API rate limiting and cors


// express-rate-limit package
const rateLimiterUsingPackage = rateLimit({
  windowMs: 5000,
  max:3,
  message:"Too many requests"
})

app.use(rateLimiterUsingPackage);

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch"
import rateLimit from "express-rate-limit";

dotenv.config()

const app = express();

app.use (
  cors({
    origin: "http://localhost:5173", // Change to your frontend URL
    methods: "GET,POST,PUT,DELETE",
    // credentials: true, // Allow cookies & authentication headers
    // allowedHeaders: {}
  })
);

const data = [
  {name:"sanjeevi"},
  {name:"vijay"},
]

const store = new Map();
const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  if (!store.has(ip)) {
    store.set(ip, [])
  }
  const currentTime = Date.now();
  const windowMs = 15000;

  const reqArray = store.get(ip)?.filter(i => (now - i <= windowMs))
  console.log('reqArray', reqArray);

  // while (reqArray.length > 0 && reqArray[0] <= currentTime - windowMs) {
  //   reqArray.shift()
  // }

  if(reqArray.length >= 3) {
    return res.status(429).send("Too many requests");
  }
  reqArray.push(currentTime);

  store.set(ip, reqArray)
  next()

};

app.use(rateLimiter);

app.get('/get', (req,res)=> {
  res.status(200).send({data})
});

app.listen(process.env.PORT, () => {
  console.log("server connected.")
})





// multiple routes

const rateLimiting = () => {
  return rateLimit({
    windowMs: 10000,
    max: 5,
    message: {error:"Too many req"}
  })
}
const limits = {
  "/get" : rateLimiting(),
  "/get1" : rateLimiting()
}
const callLimit = (req, res, next) => {
  const x = limits[req.path];
  return x(req,res, next)
}
app.get("/get", callLimit, (req, res) => {
  res.send({message: "Hello world"})
})

app.get("/get1", callLimit, (req, res) => {
  res.send({message: "Hello world1"})
})
