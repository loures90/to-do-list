import { createTaskBusiness } from "../business/createTaskBusiness.js"

const createTask = async(req,res) =>{
    try {
        const task = req.body.task
        const status = req.body.status || "TO DO"
        const token = req.headers.authorization
        await createTaskBusiness(task, status, token)
        res.status(200).send("Success")
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
export default createTask;