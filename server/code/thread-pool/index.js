import fs from 'fs'
import crypto from "crypto";

import https from 'https';

const time = Date.now()

// crypto.pbkdf2('sanj', 'salt', 100000, 512,'sha512', ()=>{}) //  cpu bound task
// crypto.pbkdf2('sanj', 'salt', 100000, 512,'sha512', ()=>{})
// crypto.pbkdf2('sanj', 'salt', 100000, 512,'sha512', ()=>{})
// crypto.pbkdf2('sanj', 'salt', 100000, 512,'sha512', ()=>{})



// https.request('https://www.goolge.com', (req, res) => {
//   res.on('data', ()=>{})
//   res.on('end', () => {
//     // console.log('a')
//   })
//   res.on('error', () => {
//     // console.log('a')
//   })
// })

import os from "os";

console.log(os.cpus().length)

console.log(Date.now() - time)

