import connection from "../../connection.js"

export const updateTask = async (idTask, task, status, lastUpdate, userId) => {
    // console.log(idTask, task, status, lastUpdate, userId)
    try {
        await connection.raw(` 
            UPDATE to_do_list  
            SET task = "${task}", status = "${status}", last_update = "${lastUpdate}", user_id  = "${userId}"
            WHERE id = "${idTask}";
    `)
    } catch (error) {
        throw error
    }
}