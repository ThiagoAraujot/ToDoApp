import { Router } from "express";
import {
  createNoteController,
  deleteNoteController,
  getAllController,
  getNoteByIdController,
  updateNoteController,
} from "../controller/note.controller.js";

const notesRouter = Router();

notesRouter.get("/", getAllController);
notesRouter.get("/find/:id", getNoteByIdController)
notesRouter.post("/", createNoteController);
notesRouter.patch("/:id", updateNoteController);
notesRouter.delete("/delete/:id", deleteNoteController);

export default notesRouter;
