import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config(); //load environment from .env file
const app = express();

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is runing on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("failed to connect to databse:", error);
    process.exit(1);
  }
};
startServer();

