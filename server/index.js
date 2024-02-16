import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import { postApiv1Login, postApiv1Registered } from "./controllers/auth.js";
dotenv.config({
  path: "./../server/.env",
});
import cors from "cors";
import { postApiv1DashboardData } from "./controllers/dashboard.controller.js";
import getApiV1UserData from "./controllers/getUserData.js";
mongoose.set("strictQuery", false);
const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});
app.post("/api/v1/register", postApiv1Registered);
app.post("/api/v1/login", postApiv1Login);
app.post("/api/v1/data/dashboard", postApiv1DashboardData)
app.get('/get/:handle' ,getApiV1UserData)
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
  connectDB();
});
