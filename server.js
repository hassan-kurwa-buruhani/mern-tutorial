const express = require('express');
const dotenv = require('dotenv');
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
dotenv.config();

const app = express();
app.use(express.json());


app.use('/api/workouts', workoutRoutes);

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI


mongoose.connect(MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`connected to database & Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error)
})
