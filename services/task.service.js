let tasks = [];
let nextId = 1;

const allowedPriorities = ['low', 'medium', 'high'];

exports.createTask = ({ title, description = '', priority = 'medium' }) => {
  if (!title || title.trim() === '') {
    throw { status: 400, message: 'Title is required' };
  }

  if (!allowedPriorities.includes(priority)) {
    throw { status: 400, message: 'Invalid priority' };
  }

  const task = {
    id: nextId++,
    title,
    description,
    completed: false,
    priority
  };

  tasks.push(task);
  return task;
};

exports.getAllTasks = (query) => {
  let result = [...tasks];

  if (query.completed) {
    result = result.filter(
      t => t.completed === (query.completed === 'true')
    );
  }
  
  return result;
};

exports.getTaskById = (id) => {
  const task = tasks.find(t => t.id === Number(id));
  if (!task) {
    throw { status: 404, message: 'Task not found' };
  }
  return task;
};

exports.updateTask = (id, data) => {
  const task = tasks.find(t => t.id === Number(id));
  if (!task) {
    throw { status: 404, message: 'Task not found' };
  }

  if (data.priority && !allowedPriorities.includes(data.priority)) {
    throw { status: 400, message: 'Invalid priority' };
  }

  Object.assign(task, data);
  return task;
};

exports.deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === Number(id));
  if (index === -1) {
    throw { status: 404, message: 'Task not found' };
  }

  tasks.splice(index, 1);
};
