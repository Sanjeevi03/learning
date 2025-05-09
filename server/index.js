import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { genSalt, hash} from "bcrypt";
import jwt from "jsonwebtoken"

dotenv.config()

const app = express();

app.use(express.json())

app.use (
  cors(
    origin: "http://localhost:5173", // Change to your frontend URL
    methods: "GET,POST,PUT,DELETE",
    // credentials: true, // Allow cookies & authentication headers
    // allowedHeaders: {}
  })
);


app.get("/", (_, res)=> {
  res.send("Hello")
});

app.listen(process.env.PORT, () => {
  console.log("server connected.")
})
