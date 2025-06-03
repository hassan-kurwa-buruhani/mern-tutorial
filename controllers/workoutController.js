const Workout = require('../modules/Workout')
const mongoose = require('mongoose')

const add_workout = async (req, res) => {
    const {title, reps} = req.body
    try {
        const workout = await Workout.create({title, reps})
        res.status(200).json(workout)
    } catch(err) {
        res.status(400).json({error: err})
    }
}


const getall_workout = async (req, res) => {
    try {
        const workouts = await Workout.find().sort({createdAt: -1});
        res.status(200).json(workouts)
    }catch(err) {
        res.status(404).json({Error: err})
    }
}


const getbyid_workout = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({message: "No such workout"})
    }

    const workout = await Workout.findById(id)
        

    if (!workout) {
        res.status(404).json({message: "No such workout"})
    }

    res.status(200).json(workout)
}

const update_workout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({message: "No such workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        res.status(404).json({message: "No such workout"})
    }

    res.status(200).json(workout)

}


const delete_workout = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({message: "No such workout"})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if (!workout) {
        res.status(404).json({message: "No such workout"})
    }
    res.status(200).json({message: "Deleted successfuy"})
}

module.exports = {
    add_workout,
    getall_workout,
    getbyid_workout,
    delete_workout,
    update_workout
}