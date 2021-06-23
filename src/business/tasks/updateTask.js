import { updateTask } from "../../data/tasks/updateTask.js"
import { returnToken } from "../../services/authenticator.js"
import { dateFormat } from "../createTaskBusiness.js"

export const updateTaskBusiness = async(idTask, task, status, token)=>{
    try {
        // console.log(task, status, user_id, token)
        const userId = returnToken(token)
        if(!userId.length)
            throw new Error("token not valid")
        if(!idTask)
            throw new Error("id task is not valid")
        if(!task)
            throw new Error("task is not valid")
        const lastUpdate =  dateFormat(new Date())

        await updateTask(idTask, task, status, lastUpdate, userId)
    } catch (error) {
        throw error
    }
}
