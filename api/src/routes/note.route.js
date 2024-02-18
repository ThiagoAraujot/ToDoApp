import { Router } from "express";
import {
  createNoteController,
  deleteNoteController,
  getAllController,
  updateNoteController,
} from "../controller/note.controller.js";

const notesRouter = Router();

notesRouter.get("/", getAllController);
notesRouter.post("/", createNoteController);
notesRouter.patch("/:id", updateNoteController);
notesRouter.delete("/delete/:id", deleteNoteController);

export default notesRouter;
