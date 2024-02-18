import Notes from "../models/Notes.js";

const getAllService = () => Notes.find();

const createNoteService = (body) => Notes.create(body);

const findByidService = (id) => Notes.findById(id);

const updateNoteService = (id, title, description, time) =>
  Notes.findOneAndUpdate(
    { _id: id },
    { title, description, time },
    {
      rawResult: true,
    }
  );

export { getAllService, createNoteService, findByidService, updateNoteService };
