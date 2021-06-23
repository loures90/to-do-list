import express from "express"
import  createTask  from "../controller/createTask.js";
import { deleteTask } from "../controller/tasks/deleteTask.js";
import { getAllTasks, getTask } from "../controller/tasks/getTasks.js";
import updateTask from "../controller/tasks/updateTask.js";

export const taskRouter = express.Router();

taskRouter.post('/create', createTask)
taskRouter.get('/all', getAllTasks)
taskRouter.get('/get/:id', getTask)
taskRouter.delete('/:id', deleteTask)
taskRouter.patch('/:id', updateTask)


