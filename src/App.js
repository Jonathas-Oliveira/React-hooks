import React,{useState} from 'react';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento web','Mobile'])
  //useState retorna um array

  function handleAddProject(){
    setProjects([
      ...projects,Date.now() 
    ]) // o operador spread precisa existir para que o estado se mantenha atualizado e não sobescreva.
  }
  return (
    <div className="App">
      <>
      <ul>
          {projects.map(projetos => <li>{projetos}</li>)}
          
      </ul>
      <button onClick={handleAddProject} type='button'>Adicionar projetos</button>
      </>
    </div>
  );
}

export default App;
