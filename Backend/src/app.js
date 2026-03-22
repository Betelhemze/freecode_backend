import express from "express";
import userRoutes from "./routes/userRoutes.js";
import postRoute from "./routes/postRoute.js";

const app = express(); 

app.use(express.json()); 

app.use("/api/users", userRoutes); 
app.use("/api/posts", postRoute); 

export default app;
