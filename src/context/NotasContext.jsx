import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from 'react';


const NotasContext = createContext();

const NotasProvider = ({children}) => {
    const [noteList, setNoteList] = useState([]);

    const createNote = (title, text) => {
      setNoteList([...noteList,
        {
          title: title,
          text: text
        }
      ]);
    }

    const deleteNote = (index) => {
      let temp = [...noteList];
      temp.splice(index, 1);
      setNoteList(temp);
    }

    useEffect(() => {
      console.log(noteList)
    }, [noteList]);

    return(
      <NotasContext.Provider 
        value={
          {
            createNote,
            deleteNote,
            noteList,
            setNoteList
          }
        }
      >
        {children}
      </NotasContext.Provider>
    );
}

export { NotasContext, NotasProvider };