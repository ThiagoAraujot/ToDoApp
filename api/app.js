import express from "express";
import router from "./src/routes/index.js";
import connectToDatabase from "./src/database/database.js";
import cors from "cors";

const app = express();

connectToDatabase();

app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(router);

export default app;
