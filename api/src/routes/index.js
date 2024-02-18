import { Router } from "express";
import notesRouter from "./note.route.js";

const router = Router();

router.use("/notes", notesRouter);

export default router;
