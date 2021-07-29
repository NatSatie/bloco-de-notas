import { useState } from 'react';
import { Button, FormControl, InputBase } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import useNotas from '../hooks/useNotas';
import { Container, NoteContainer, Title } from '../style/Cadastro';

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
    <Container>
      <NoteContainer>
        <FormControl>
          <Title type="text" onChange={handleChangeTitle} placeholder="Título"/>
          <InputBase fullwidth multiline type="text" onChange={handleChangeText} placeholder="Escreva sua nota"/>
          <Button
            onClick={handleCreateNote}
          >
            Criar nota
          </Button>
        </FormControl>
      </NoteContainer>
    </Container>
  );
}

export default Cadastro;