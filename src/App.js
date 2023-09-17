import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const adicionarColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => adicionarColaborador(colaborador)} />
    </div>
  );
}

export default App;
