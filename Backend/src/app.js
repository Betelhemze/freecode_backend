import express from "express"

const app = express(); // create an instance of express application 
app.use(express.json()) // this will allow us to parse the incoming from client request body as JSON
import userRoutes from "./routes/userRoutes.js"

app.use("/api/users", userRoutes) // this will mount the userRoutes on the /api/users path, so any request to /api/users will be handled by the userRoutes


app.listen(3000, () => {
    console.log("server is running on port 3000")
})










export default app;
