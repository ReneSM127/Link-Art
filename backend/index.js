import express from "express";
const app = express();
const PORT = process.env.PORT || 8800
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/post.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/auth", authRoutes); 

app.listen(PORT, () => {
  console.log("API WORKING");
});
