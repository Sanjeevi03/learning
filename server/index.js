import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import fetch from "node-fetch"
// import rateLimit from "express-rate-limit";

dotenv.config()

const app = express();

app.use (
  cors({
    origin: "http://localhost:3001", // Change to your frontend URL
    methods: "GET,POST,PUT,DELETE",
    // credentials: true, // Allow cookies & authentication headers
    // allowedHeaders: {}
  })
);

const data = [
  {name:"sanjeevi"},
  {name:"moni"},
  {name:"dev"},
  {name:"vimal"},
  {name:"bh"},
]
app.get("/get", (_,res)=> {
  res.send(data)
})

app.listen(process.env.PORT, () => {
  console.log("server connected.")
})
