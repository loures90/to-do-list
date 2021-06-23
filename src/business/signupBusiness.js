import { getUsers } from "../data/getUsers.js"
import signupData from "../data/signupData.js"
import { generateId } from "../services/generateId.js"
import { hashCreator } from "../services/hashManager.js"

const signupBusiness = async (name, email, password) =>{
    try {
        if(!name || !email || !password ||password.length <6) throw new Error("Fulfill valid name, email and password.")
        if(email.indexOf("@")<0 || email.indexOf(".com")<0) throw new Error(email," not valid.")
        const users = await getUsers(email)
        if(users.length>0){ throw new Error("User already exist.")}
        const encryptPassword = await hashCreator(password)
        const id = generateId()
        await signupData(id, name,email, encryptPassword)  
    } catch (error) {
        throw new Error(error.message);
    }
}
export default signupBusiness;