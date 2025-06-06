const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    reps: {
        type: Number,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema);