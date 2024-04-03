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
import { getApiV1UserData } from "./controllers/getUserData.js";
import {
  postApiV1SaveLinks,
  postApiV1SaveProfile,
  postApiV1SaveSocial,
} from "./controllers/saveItems.js";
import {
  postApiV1LoadLinks,
  postApiV1LoadSocial,
} from "./controllers/postApiV1LoadSocial.js";
mongoose.set("strictQuery", false);
const app = express();
// Allow requests from a specific origin
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});
app.post("/api/v1/register", postApiv1Registered);
app.post("/api/v1/login", postApiv1Login);
app.post("/api/v1/data/dashboard", postApiv1DashboardData);
app.get("/get/:handle", getApiV1UserData);
// app.get('/get/socials/:handle' ,getApiV1SocialMedia)
app.post("/api/v1/save/social", postApiV1SaveSocial);
app.post("/api/v1/save/links", postApiV1SaveLinks);
app.post("/api/v1/load/social", postApiV1LoadSocial);
app.post("/api/v1/load/links", postApiV1LoadLinks);

app.post("/api/v1/save/profile", postApiV1SaveProfile);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
  connectDB();
});
