import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    console.log(`Server is running at port ${process.env.PORT}`);
})
.catch((error) => {
    console.error("Failed to connect to the database:", error);
});