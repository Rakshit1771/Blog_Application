import express from "express";
import cookieParser from "cookie-parser";
const app = express();
import cors from "cors";
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
import userRouter from "./Routes/Routes.js";
import postRoutes from "./Routes/postRoutes.js";

app.use("/api/users", userRouter);
app.use("/api/posts", postRoutes);
export { app };
