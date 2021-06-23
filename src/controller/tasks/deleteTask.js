import { deleteTaskBusiness } from "../../business/tasks/deleteTask.js"

export const deleteTask = async(req,res) =>{
    try {
        const token = req.headers.authorization
        const idTask = req.params.id
        await deleteTaskBusiness(token,idTask)
        res.status(200).send("Task was deleted.")
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}