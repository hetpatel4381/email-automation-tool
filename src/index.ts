import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", async (req, res) => {
  res.send("Welcome to Gmail API with NODE.JS");
});

app.listen(process.env.PORT, () => {
  console.log("Server running at port 3000");
});
