import {
  createNoteService,
  deleteNoteService,
  findByidService,
  getAllService,
  updateNoteService,
} from "../service/note.service.js";

export const getAllController = async (req, res) => {
  try {
    const notes = await getAllService();

    return res.send(notes);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const createNoteController = async (req, res) => {
  try {
    const { title, description, time } = req.body;

    if (!title || !description || !time) {
      return res.status(400).send("Title and description are required");
    }

    await createNoteService({ title, description, time });

    res.status(201).send("Note created successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updateNoteController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, time } = req.body;

    if (!title || !description || !time) {
      return res.status(400).send("Title, description and time are required");
    }

    const note = await findByidService(id);

    if (!note) {
      return res.status(404).send("Note not found");
    }

    await updateNoteService(id, title, description, time);

    res.status(200).send("Note updated successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const deleteNoteController = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await findByidService(id);

    if (!note) {
      return res.status(404).send("Note not found");
    }

    await deleteNoteService(id);

    res.status(200).send("Note deleted successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
