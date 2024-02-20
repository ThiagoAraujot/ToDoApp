import { useEffect, useState } from "react";
import styled from "styled-components";
import { getNotes } from "./services/notesService";
import { Card } from "./components/Card/Card";

function App() {
  const [notes, setNotes] = useState([]);

  async function getAllNotes() {
    const response = await getNotes();
    console.log(response.data);
    setNotes(response.data);
  }

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <>
      <Container>
        <h2>Adcionar Tarefa</h2>
        <div className="input-container">
          <input type="text" />
          <button>Criar +</button>
        </div>
      </Container>
      <Tarefas>
        {notes.map((note) => (
          <Card key={note.id} />
        ))}
      </Tarefas>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 1em;
  gap: 0.5em;

  .input-container {
    display: flex;
    align-items: center;
    gap: 0.5em;

    input {
      padding: 0.5em;
      border: 1px solid #ccc;
      border-radius: 0.5em;
      outline: none;
    }

    button {
      padding: 0.5em 1em;
      border: none;
      border-radius: 0.5em;
      background-color: #8e8e8ec0;
      color: #fff;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: #1a1a1a;
      }
    }
  }
`;

const Tarefas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1em;
  margin: 0 auto;
  padding: 1em;
  width: 80%;
`;

export default App;
