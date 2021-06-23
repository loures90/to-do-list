import saveTask from "../data/saveTask.js"
import { returnToken } from "../services/authenticator.js"
import { generateId } from "../services/generateId.js"

export const createTaskBusiness = async(task, status, token)=>{
    try {
        const userId = returnToken(token)
        if(userId.error)
            throw new Error(userId.error)
        if(!task)
            throw new Error("task is not valid")
        const lastUpdate =  dateFormat(new Date())
        const idTask = generateId()
        await saveTask(idTask, task, status, lastUpdate, userId)
    } catch (error) {
        throw error
    }
}

export const dateFormat =(date)=>{
    const day = date.getDate()
    const month = date.getMonth()
    const year =date.getFullYear()
    return `${year}-${month}-${day}`
}