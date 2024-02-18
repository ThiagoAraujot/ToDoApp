import mongoose from "mongoose";

const NotesSchemma = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Notes = mongoose.model("Notes", NotesSchemma);

export default Notes;
