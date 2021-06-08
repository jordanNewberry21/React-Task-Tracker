const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

// Route Includes
const taskRouter = require('./routes/task.router');

// set up body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('./public'));

// Routes
app.use('/tasks', taskRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});