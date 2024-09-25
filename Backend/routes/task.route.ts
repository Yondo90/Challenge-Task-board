import {
  createTask,
  deleteTask,
  getTask,
  getTaskById,
  updateTask,
} from "../controllers/task.controller";
import { Router } from "express";

const taskRoute = Router();

taskRoute.route("/").post(createTask).get(getTask);
taskRoute.route("/:idtask").put(updateTask).delete(deleteTask).get(getTaskById);

export default taskRoute;
