import connection from "../connection.js"

export const getUsers = async(email) =>{
    const result = await connection.raw(` 
        SELECT * FROM Users WHERE email = "${email}";
    `)
    return result[0]
} 