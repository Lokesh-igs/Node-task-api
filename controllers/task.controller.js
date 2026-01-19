const taskService = require('../services/task.service');

// CREATE
exports.createTask = (req, res, next) => {
  try {
    const task = taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

// READ ALL (with filtering)
exports.getAllTasks = (req, res, next) => {
  try {
    const tasks = taskService.getAllTasks(req.query);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// READ ONE
exports.getTaskById = (req, res, next) => {
  try {
    const task = taskService.getTaskById(req.params.id);
    res.json(task);
  } catch (err) {
    next(err);
  }
};

// UPDATE
exports.updateTask = (req, res, next) => {
  try {
    const task = taskService.updateTask(req.params.id, req.body);
    res.json(task);
  } catch (err) {
    next(err);
  }
};

// DELETE
exports.deleteTask = (req, res, next) => {
  try {
    taskService.deleteTask(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
