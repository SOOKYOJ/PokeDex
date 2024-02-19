import { useEffect, useState } from 'react';
import KitchenSinkExample from './Card';
import axios from 'axios';

function Normal() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allPokeData = [];
      for (let i = 1; i <= 151; i++) {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        allPokeData.push(res);
      }
      setPokeData(allPokeData); //.filter((poke) => poke.data.types.type.name.includes('normal')));//
    };
    fetchData();
  }, []);

  return (
    <div className="Normal">
      {pokeData.map((poke) => (
        <KitchenSinkExample key={poke.data.id} title={poke.data.name} url={poke.data.sprites.front_default} text={poke.data.id} />
      ))}
    </div>
  );
}

export default Normal;
