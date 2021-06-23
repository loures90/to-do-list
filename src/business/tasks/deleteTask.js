import { deleteTaskData } from "../../data/tasks/deleteTask.js"
import { getTaskBusiness } from "./getTasks.js"

export const deleteTaskBusiness = async(token, idTask)=>{
    try {
        const task = await getTaskBusiness(token,idTask)
        if(!idTask || !task.length)
            throw new Error("id task is not valid")
        return await deleteTaskData(task[0].id)
    } catch (error) {
        throw error
    }
}