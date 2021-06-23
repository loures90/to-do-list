import loginBusiness from "../business/loginBusiness.js";

const loginController = async (req, res)=>{
    try {
        const {email, password } = req.body;
        const token = await loginBusiness(email, password);
        res.status(201).send({token: token});
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
export default loginController;