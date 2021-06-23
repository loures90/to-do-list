import app from "./app.js"
import { taskRouter } from "./router/tasks.js"
import {userRouter} from  './router/user.js'

app.use("/user", userRouter)
app.use("/task", taskRouter)