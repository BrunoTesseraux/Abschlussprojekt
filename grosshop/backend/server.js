import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

import app from "./app.js";

const DB = process.env.MONGODB_URL.replace(
  "<USERNAME",
  process.env.USERNAME
).replace("PASSWORD", process.env.PASSWORD);

PORT = process.env.PORT || 5004;

const serverListenToPort = () => {
  app.listen(PORT, () => console.log(`Server runs on Port ${PORT}`));
};

console.log("Connection to database");

mongoose
  .connect(DB, { dbName: "grosShopAbschlussprojekt" })
  .then(() => {
    console.log("DB connection successfull");
    serverListenToPort();
  })
  .catch((err) => {
    console.log("Error connecting to database");
    console.log(err);
    console.log("Server will not start. Abroting...");
    process.exit();
  });
