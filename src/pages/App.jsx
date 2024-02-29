import { useEffect, useState } from 'react';
import '../App.css';
import KitchenSinkExample from '../components/Card';
import axios from 'axios';

function App() {
  const [findPoke, setFindPoke] = useState('');
  const [pokeData, setPokeData] = useState([]);
  const [resultPoke, setResultPoke] = useState([]);

  const handlePoke = (e) => {
    setFindPoke(e.target.value);
    const contrastPoke = pokeData.filter((poke) => poke.name.includes(e.target.value));
    setResultPoke(contrastPoke);
  };

  useEffect(() => {
    const fetchData = async () => {
      const allPokeData = [];
      for (let i = 1; i <= 151; i++) {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        allPokeData.push(res.data);
      }
      setPokeData(allPokeData);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <input value={findPoke} onChange={handlePoke} placeholder="Search Pokemon!"></input>
      </div>
      {resultPoke.map((poke) => (
        <KitchenSinkExample key={poke.id} title={poke.name} url={poke.sprites.front_default} text={poke.id} />
      ))}
      <div className="background" />
    </div>
  );
}

export default App;
