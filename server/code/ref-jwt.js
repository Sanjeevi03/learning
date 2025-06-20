import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { genSalt, hash} from "bcrypt";
import jwt from "jsonwebtoken"

dotenv.config()

const app = express();

app.use(express.json())

app.use (
  cors({
    origin: "http://localhost:5173", // Change to your frontend URL
    methods: "GET,POST,PUT,DELETE",
    // credentials: true, // Allow cookies & authentication headers
    // allowedHeaders: {}
  })
);


app.get("/", (_, res)=> {
  res.send("Hello")
});

const userList = [];
const rftoken = [];

app.get("/users", auth, (req, res) => {
  res.send(userList.filter(i => i.username === req.user.username))
})

app.post("/reg", async (req, res) => {
  const { username, password } = req.body;
  const salt = await genSalt(10);
  const encryptPsw = await hash(password, salt);
  userList.push({
    username,
    password: encryptPsw
  })
  res.status(200).send({message:"User created"})
})


app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const exist = userList.find(user => user.username === username)
  if(!exist) {
    return res.send("User not found")
  }
  const user = { username, password };
  const token = await generateAccessToken(user);
  const rtoken = await jwt.sign(user, "1234" );
  rftoken.push(rtoken)
  res.status(200).send({ accessToken: token, refreshToken: rtoken });
})

app.post("/token", async (req, res) => {
  const {token} = req.body;
  if(!token) return res.send("token not found")
  if(!rftoken.includes(token)) return res.send("refresh token not found")

  jwt.verify(token, '1234', async (err, user) => {
    if(err) return res.send("error")
    const accessToken = await generateAccessToken({username: user.username})
    return res.send({ accessToken})
  })
})


app.delete('/logout', (req, res) => {
  rftoken = rftoken.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

app.listen(process.env.PORT, () => {
  console.log("server connected.")
})


function auth(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if(token) {
    jwt.verify(token, '1234', (err, user) => {
      if(err) {
        return res.sendStatus(400)
      }
      req.user = user;
      next()
    })
  } else {
    return res.status(404).send("unauthorized")
  }
}

async function generateAccessToken(user) {
  const token = await jwt.sign(user, "1234", { expiresIn : '10s'});
  return token
}
