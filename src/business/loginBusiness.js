import { getUsers } from "../data/getUsers.js";
import { generateToken, returnToken } from "../services/authenticator.js";
import { hashCompare } from "../services/hashManager.js";

const loginBusiness = async (email, password) =>{
    try {
        if(!email || !password ||password.length <6) throw new Error("Fulfill valid email and password values.")
        if(email.indexOf("@")<0 || email.indexOf(".com")<0) throw new (email," not valid.")
        const user = await getUsers(email)
        if(user.length <1){ throw new Error("Invalid credentials.")}
        const validatePassword = await hashCompare(password, user[0].password)
        if(!validatePassword ) { throw new Error("Invalid credentials.")}
        const token = await generateToken(user[0].id)
        return token
    } catch (error) {
        throw new Error(error.message);
    }
}
export default loginBusiness;