const express = require('express');
const taskRoutes = require('./routes/task.routes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());

// routes
app.use('/tasks', taskRoutes);

// error handler (must be last)
app.use(errorHandler);

module.exports = app;
