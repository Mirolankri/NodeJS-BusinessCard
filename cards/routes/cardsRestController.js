const express = require ("express")
const chalk = require("chalk")
// const app = express()
const router = express.Router()
require('dotenv').config()

const EndPoint = `http://localhost:${process.env.PORT}/cards`;


//################ GET ############################
router.get("/",(req,res,next)=>{
    console.log(`${EndPoint}/`);
    return res.send(`${EndPoint}/`)
    // next()
})

router.get("/:id",(req,res,next)=>{
  const id = req.params.id
  console.log(`${EndPoint}/${id}`);
  return res.send(`${EndPoint}/${id}`)
// next()
})

//################ POST ############################

router.post("/",(req,res,next)=>{
  console.log(`${EndPoint}/`);
  return res.send(`${EndPoint}/`)
  // next()
})

//################ PUT ############################

router.put("/:id",(req,res,next)=>{
  const id = req.params.id
  console.log(`${EndPoint}/${id}`);
  return res.send(`${EndPoint}/${id}`)
// next()
})

//################ PATCH ############################

router.patch("/:id",(req,res,next)=>{
  const id = req.params.id
  console.log(`${EndPoint}/${id}`);
  return res.send(`${EndPoint}/${id}`)
// next()
})
//################  DELETE ############################

router.delete("/:id",(req,res,next)=>{
  const card_id = req.params.id
  console.log(`in card delete`);
  return res.send(`Card Delete: ${card_id}`)
// next()
})




router.post('/new', (req, res, next) => {
    console.log('Get Post New')
    next()
  }, (req, res, next) => {
    res.send(req.body)
  })

module.exports = router