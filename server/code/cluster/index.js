import cluster from "cluster";
import express from "express";

if(cluster.isPrimary) {
  console.log('pid', process.pid)
  cluster.fork()
  cluster.fork()
} else {

  const app = express()
  
  
  app.get("/", (_, res) => {
    res.send("Home page")
  })
  
  app.get("/get", (_, res) => {
        
    let sum = 0
    for(let i = 0; i < 40_00_00_00_00;i++) {
      sum+=i
    }

      res.send("get page"+ sum)
  })
  
  
  
  app.listen(5000, () => {
    console.log("Server started")
  });
  
}