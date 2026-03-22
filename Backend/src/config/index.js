import dotenv from "dotenv";
import connectDB from "./db.js";
import app from "../app.js"; // Import the Express application from app.js

dotenv.config(); // load environment from .env file

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running on port ${process.env.PORT || 3000}`);
    });
  } catch (error) {
    console.error("failed to connect to database:", error);
    process.exit(1);
  }
};

startServer();
