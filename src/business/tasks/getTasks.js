import { getAllTasksData, getTaskData } from "../../data/tasks/getTasks.js"
import { returnToken } from "../../services/authenticator.js"

export const getAllTasksBusiness = async(token)=>{
    try {
        const userId = returnToken(token)
        if(!userId.length)
            throw new error({error:"Forbiden"})
        return await getAllTasksData()
    } catch (error) {
        throw error
    }
}

export const getTaskBusiness = async(token, idTask)=>{
    try {
        const userId = returnToken(token)
        if(!userId)
            throw new error("Forbidden")
        if(!idTask)
            throw new Error("id task is not valid")
        const task = await getTaskData(idTask)
        if (!task[0]?.id)
            throw new Error("Not Found");
        return task
    } catch (error) {
        throw error
    }
}