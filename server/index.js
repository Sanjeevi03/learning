import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import JWT_Router from "./code/jwt.js";

dotenv.config()

const app = express();

// app.use(express.json())

app.use (
  cors({
    origin: "http://localhost:3000", // Change to your frontend URL
    methods: "GET,POST,PUT,DELETE",
    // credentials: true, // Allow cookies & authentication headers
    // allowedHeaders: {}
  })
);


const data = [
  {name:"sa", age:1},
  {name:"sa", age:1},
  {name:"sa", age:1},
  {name:"sa", age:1},
]
app.get("/", (_, res)=> {
  res.send(data)
});

// app.use(JWT_Router)

app.listen(process.env.PORT, () => {
  console.log("server connected.")
})