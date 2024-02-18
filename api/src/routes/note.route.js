import { Router } from "express";
import {
  createNoteController,
  getAllController,
  updateNoteController,
} from "../controller/note.controller.js";

const notesRouter = Router();

notesRouter.get("/", getAllController);
notesRouter.post("/", createNoteController);
notesRouter.patch("/:id", updateNoteController);

export default notesRouter;
