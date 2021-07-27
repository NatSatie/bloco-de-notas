import { Header, NoteContainer, Title } from "../style/Nota";
import { BsFillTrashFill } from "react-icons/bs";
import { Button } from "@material-ui/core";
import useNotas from "../hooks/useNotas";

const Nota = ({index, title, text}) => {
  const { deleteNote } = useNotas();

  const handleClick = () => {
    deleteNote(index);
  }

  return(
    <NoteContainer>
      <Header>
        <Title>
          {title}
        </Title>
        <Button 
          onClick={handleClick}
          startIcon={<BsFillTrashFill/>}
        />
      </Header>
      <p>
        {text}
      </p>
    </NoteContainer>
  )
}

export default Nota;