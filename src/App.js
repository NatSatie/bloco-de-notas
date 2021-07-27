import { useEffect, useState } from 'react';
import Cadastro from './components/Cadastro';
import ListaDeNotas from './components/ListaDeNotas';
import { NotasProvider } from './context/NotasContext';

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@700&display=swap" rel="stylesheet"></link>
      <Cadastro/>
      <ListaDeNotas/>
    </>
  );
}

export default App;
