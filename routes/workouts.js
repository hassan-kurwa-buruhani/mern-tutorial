const express = require('express')
const Workout = require('../modules/Workout')
const {add_workout, 
    getall_workout, 
    getbyid_workout,
    delete_workout,
    update_workout} = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getall_workout)

router.post('/', add_workout)


router.get('/:id', getbyid_workout)


router.delete('/:id', delete_workout)

router.patch('/:id', update_workout)

module.exports = router