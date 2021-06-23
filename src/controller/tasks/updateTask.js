import { updateTaskBusiness } from "../../business/tasks/updateTask.js"

const updateTask = async(req,res) =>{
    try {
        const idTask = req.params.id
        const task = req.body.task
        const status = req.body.status || "TO DO"
        const token = req.headers.authorization
        await updateTaskBusiness(idTask, task, status, token)
        res.status(200).send("Success")
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
export default updateTask;