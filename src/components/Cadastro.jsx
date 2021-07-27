import { useState } from 'react';
import { Button, FormControl, InputBase } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import useNotas from '../hooks/useNotas';

const Cadastro = () => {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const { createNote } = useNotas();

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleChangeText = (event) => {
    setText(event.target.value);
  }

  const handleCreateNote = (event) => {
    event.preventDefault();
    createNote(title, text);
  }

  return(
    <div>
      <h1>Aula alura</h1>
      <FormControl>
        <InputBase type="text" onChange={handleChangeTitle}/>
        <TextareaAutosize
          placeholder="Escreva sua nota"
          onChange={handleChangeText}
        />
        <Button
          onClick={handleCreateNote}
        >
          Criar nota
        </Button>
      </FormControl>
    </div>
  );
}

export default Cadastro;