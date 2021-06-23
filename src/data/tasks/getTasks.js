import connection from "../../connection.js"

export const getAllTasksData = async() =>{
    const result = await connection.raw(` 
        SELECT * FROM to_do_list;
    `)
    return result[0]
}

export const getTaskData = async(idTask) =>{
    const result = await connection.raw(` 
        SELECT * FROM to_do_list WHERE id = "${idTask}";
    `)
    return result[0]
}