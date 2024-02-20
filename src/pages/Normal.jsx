import { useEffect, useState } from 'react';
import KitchenSinkExample from '../components/Card';
import axios from 'axios';

function Normal() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allPokeData = [];
      for (let i = 1; i <= 151; i++) {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        allPokeData.push(res.data);
      }
      console.log(allPokeData);
      setPokeData(allPokeData.filter((poke) => poke.types.type.name.includes('normal')));
    };
    fetchData();
  }, []);

  return (
    <div className="Normal">
      {pokeData.map((poke) => (
        <KitchenSinkExample key={poke.id} title={poke.name} url={poke.sprites.front_default} text={poke.id} />
      ))}
    </div>
  );
}

export default Normal;
