const express = require('express');
const dotenv = require('dotenv');
const workoutRoutes = require('./routes/workouts')

dotenv.config();

const app = express();
app.use(express.json());


app.use('/api/workouts', workoutRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});