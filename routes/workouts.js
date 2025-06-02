const express = require('express')
const Workout = require('../modules/Workout')
const {add_workout, 
    getall_workout, 
    getbyid_workout} = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getall_workout)

router.post('/', add_workout)


router.get('/:id', getbyid_workout)


router.delete('/:id', (req, res) => {
    res.json({message: "delete a workout"})
})

router.patch('/:id', (req, res) => {
    res.json({message: "update a workout"})
})

module.exports = router