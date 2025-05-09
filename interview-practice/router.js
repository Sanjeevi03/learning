import { Router } from "express";
import mongoose from "mongoose";
import User from "./schema.js";
import axios from "axios";

const router = Router();

router.get("/get", async (req, res) => {

  try {
    const { data } = await axios.get("https://dummyjson.com/products?limit=10")
    res.send(data)
  } catch(e) {
    console.log("err:", e.message)
  }
})

router.post("/post", async (req, res) => {
  
  try {
    const { name } = req.query;
    const ex = await new User({name})
    ex.save()
    console.log(ex)
    res.send('created')
  } catch(e) {
    console.log('error', e.message);
  }
})

router.put('/update/:id', async(req, res) => {
  const { id } = req.params;
  const list = await User.findByIdAndUpdate({_id: id}, {
    name:"sanjeevi-moni"
  })
  console.log(list)
  res.send("updated")
})

router.delete('/delete/:id', async(req, res) => {
  const { id } = req.params;
  const list = await User.findByIdAndDelete({_id: id})
  console.log(list)
  res.send("deleted")
})





export default router;