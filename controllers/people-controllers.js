const { json } = require('express')
const express = require('express')
const router = express.Router()

// import mode (People)
const {People} = require('../models')
const db = require('../models')
console.log(People)


//Routes
// People Index Route
router.get('/', async (req, res) => {
    // res.status(200).json({message: "people index route "})
    try{
        res.json(await People.find({}))
    }catch (error){
        res.status(400).json(error)
    }
})

// http://localhost:4000/people/
//People Create Route
router.post('/', async (req, res) => {
    // res.status(201).json({message: "people create/post route "})
    try{
        res.json (await People.create (req.body))
    }catch{
        res.status(400).json({error: err})
    }
})

// People Show Route
router.get('/:id', async(req,res) => {
    // res.status(200).json({message: "people show route " + req.params.id})
    try{
        res.json(await People.findById(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

// People Delete Route
router.delete('/:id', async (req, res) => {
    // res.status(200).json({message: "people delete route " + req.params.id})
    try{
        res.json(await People.findByIdAndRemove(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

// People Update Route
router.put('/:id', async (req, res) => {
    // console.log(req.body)
    // res.status(200).json({message: "people update route " + req.params.id})
    try{
        res.json(await People.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    }catch (error){
        res.json(error)
    }
})
module.exports = router