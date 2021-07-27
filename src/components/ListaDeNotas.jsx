import { useEffect } from "react";
import useNotas from "../hooks/useNotas";
import Nota from "./Nota"

const ListaDeNotas = () => {
  const { noteList } = useNotas();
  return(
    <>
      {noteList.map( (note, index) => <Nota key={index} index={index} title={note.title} text={note.text}/>)}
    </>
  );
}

export default ListaDeNotas;