import { Router } from "express";
import jwt from "jsonwebtoken";

const user = [{
    "email":"sansanjeevi10@gmail.com", "password":"san"
}]
const router = Router()

router.post('/register', (req, res) => {
  user.push(req.body)
  res.status(201).send({message:"User added", data: user})
});

router.post('/login', async (req, res) => {

  const { email, password } = req.body;

  const exist = user.find(i => i.email === email)
  if(!exist) {
    return res.status(400).send("User not found")
  }
  
  const exist1 = user.find(i => i.password === password)
  if(!exist1) {
    return res.status(400).send("password invalid")
  }
  const token = await generateTokens(email)
  res.send(token)
})

router.post('/refresh-token', async (req, res) => {
  const ref = req.body;
  if(!ref) return res.status(403).send("refrsh token missing");
  try {
    const data = await jwt.verify(ref.refreshToken, '12345')
    console.log("tokem in refrsh", data)
    req.user = data
  } catch(e) {
    console.log(e.message)
    res.status(400).send(e.message)
  }
})


router.get('/protected', auth, (req, res) => {
  try {
    res.status(200).send(req.user)
  } catch(e) {
    res.status(401).send(e.message)
  }
})

export default router;


async function auth(req, res, next) {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    console.log('tok', token)
    if(!token) {
      throw new Error('token not found')
    }
    const data = await jwt.verify(token, '12345')
    console.log("tokem in auth", data)
    req.user = data
    next()
  } catch(e) {
    console.log(e.message)
    res.status(400).send(e.message)
  }
}

const generateTokens = async (email) => {
  const accessToken = await jwt.sign({email}, "12345", { expiresIn: "15s" });
  const refreshToken = await jwt.sign({email}, "12345", { expiresIn: "1d" });
  return { accessToken, refreshToken}
}