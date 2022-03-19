const Task = require("../model/schema");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const singleTask = await Task.findOne({ _id: id });
    res.json({ singleTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const delTask = await Task.findOneAndDelete({ _id: id });
    if (!delTask) res.status(404).json({ msg: `No task with ${id}` });
    else res.status(200).json({ msg: "deleted" });
  } catch (error) {
    res.json({ error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).json({ msg: `No task with ${id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.json({ error });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  getSingleTask,
};
