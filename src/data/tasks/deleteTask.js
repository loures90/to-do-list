import connection from "../../connection.js"

export const deleteTaskData = async(idTask) =>{
    await connection.raw(` 
        delete FROM to_do_list WHERE id = "${idTask}";
    `)
}