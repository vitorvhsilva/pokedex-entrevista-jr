import { useEffect } from "react";
import axios from 'axios';


function App() {

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => console.log(res))
  }, [])

  return (
    <>
      <h3>entrevista jr react</h3>
      <h1>consumo API pokemons</h1>
    </>
  )
}

export default App;
