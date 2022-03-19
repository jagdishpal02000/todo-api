const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  getSingleTask,
} = require("../controllers/tasks.js");

router.route("/").get(getAllTasks);
router.route("/").post(createTask);

router.route("/:id").get(getSingleTask);
router.route("/:id").delete(deleteTask);
router.route("/:id").patch(updateTask);

module.exports = router;
