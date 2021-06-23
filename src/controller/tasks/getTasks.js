import { getAllTasksBusiness, getTaskBusiness } from "../../business/tasks/getTasks.js"

export const getAllTasks = async(req,res) =>{
    try {
        const token = req.headers.authorization
        const result =await getAllTasksBusiness(token)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

export const getTask = async(req,res) =>{
    try {
        const token = req.headers.authorization
        const idTask = req.params.id
        const result =await getTaskBusiness(token,idTask)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}