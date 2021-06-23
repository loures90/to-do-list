import connection from "../connection.js";

const signupData = async (id, name, email, password) => {
    try {
        console.log("data ", id, name, email, password)
        await connection.raw(`
        INSERT INTO Users (id, name, email, password) 
            VALUES ("${id}","${name}","${email}","${password}");
    `)
    } catch (error) {
        console.log(error)
    }
}
export default signupData;