import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import userRoutes from "../routes/userRoutes.js";

dotenv.config(); //load environment from .env file
const app = express();
app.use(express.json()); // this will allow us to parse the incoming from client request body as JSON
app.use("/api/users", userRoutes); // mount the userRoutes on the /api/users path

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("failed to connect to databse:", error);
    process.exit(1);
  }
};
startServer();

