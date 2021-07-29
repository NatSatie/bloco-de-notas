import Cadastro from './components/Cadastro';
import ListaDeNotas from './components/ListaDeNotas';
import { Container } from './style/App';

function App() {
  return (
    <Container>
      <Cadastro/>
      <ListaDeNotas/>
    </Container>
  );
}

export default App;
