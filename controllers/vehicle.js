const router = require('express').Router()
const Vehicle = require('../models/vehicle')


router.get('/', async (req, res) =>{
    const vechiles = await Vechile.find()
    res.json(vehicles)
})

router.post('/', async (req,res) =>{
    const vechicle = await new Vehicle(req.body).save()
    res.json(vehicle)
})

module.exports = router