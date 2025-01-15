import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";
import userRoutes from "./routes/user.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import {v2 as cloudinary} from "cloudinary";
dotenv.config();


cloudinary.config();({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

const PORT = process.env.PORT || 5000;

// console.log(process.env.MONGO_URI)


app.use(express.json());    //middleware to parse req. body
app.use(express.urlencoded({extended: true}));  //to parse form data

app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);
app.use("/api/notifications",notificationRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
    // console.log(`Server is running on port 5000`);
    connectMongoDB();
});