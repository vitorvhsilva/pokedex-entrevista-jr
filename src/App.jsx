/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from 'axios';


function App() {

  const[list, setList] = useState([])

  const fetchListData = () => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {

      const sortedArray = [...res.data.results]
      
      sortedArray.sort((a, b) => {
        console.log({a})
        console.log({b})
        
        return a.name.localeCompare(b.name)
      })

      setList(sortedArray)
    })
  }

  useEffect(() => {
    fetchListData();
  }, [])

  return (
    <>
      <h3>entrevista jr react</h3>
      <h1>consumo API pokemons</h1>
      <hr />
      {list.map(item => 
      <>
        {<Pokemon key={item.name} data={item} />}
      </>)}
    </>
  )
}

const Pokemon = ({ data }) => {
  const [details, setDetails] = useState(null)

  const fetchIndividualPokemon = () => {
    axios.get(data.url).then((res) => setDetails(res.data))
  }

  useEffect(() => {
    fetchIndividualPokemon()
  })

  if (details === null) {
    return <div>carregando...</div>
  }

  return (
    <div style={{display: 'flex', alignItems: 'center'}} >
      <span>
        <img src={details.sprites.front_default} alt={details.name} 
        style={{width: 30, marginRight: 20}}
        />
      </span>
      <span>
        <b>{details.name}</b> - EXP {details.base_experience} 
      </span>
    </div>
  )
}

export default App;
