import signupBusiness from "../business/signupBusiness.js";

const signupController = async (req, res)=>{
    try {
        const {name, email, password } = req.body;
        await signupBusiness(name, email, password);
        res.status(201).send("Success!");
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
export default signupController;