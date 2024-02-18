import express from "express";
import router from "./src/routes/index.js";
import connectToDatabase from "./src/database/database.js";

const app = express();

connectToDatabase();

app.use(express.json());
app.use(router);

export default app;
