import connection from "../connection.js";

const saveTask = async (idTask, task, status, lastUpdate, userId) => {
    try {
        await connection.raw(` 
            INSERT INTO to_do_list (id, task, status, last_update, user_id ) 
            VALUES ("${idTask}", "${task}", "${status}", "${lastUpdate}", "${userId}");
    `)
    } catch (error) {
        throw error
    }
}
export default saveTask;