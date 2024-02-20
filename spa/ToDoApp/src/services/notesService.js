import axios from "axios";

const BaseURL = "http://localhost:3000/notes";

export function getNotes() {
  const response = axios.get(`${BaseURL}/`);
  return response;
}

export function createNote(data) {
  const response = axios.post(BaseURL, data);
  return response;
}
