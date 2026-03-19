import express from "express"

const app = express(); // create an instance of express application 
app.use(express.json()) // this will allow us to parse the incoming from client request body as JSON
import userRoutes from "./routes/userRoutes.js"

app.use("/api/users", userRoutes) // this will mount the userRoutes on the /api/users path, so any request to /api/users will be handled by the userRoutes













export default app;
