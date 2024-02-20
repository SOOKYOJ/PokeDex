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
    <div
      className="App"
      style={{
        width: '100vw',
        height: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `URL('https://cdn.dribbble.com/userupload/3875672/file/original-42f52449520e8e7940c668566888d84f.png?resize=752x')`,
        backgroundAttachment: 'fixed',
        zIndex: '1',
      }}
    >
      <div>
        <input value={findPoke} onChange={handlePoke} placeholder="Search Pokemon!"></input>
      </div>
      {resultPoke.map((poke) => (
        <KitchenSinkExample key={poke.id} title={poke.name} url={poke.sprites.front_default} text={poke.id} />
      ))}
      <div
        style={{
          backgroundImage: `URL('https://cdn.dribbble.com/userupload/3875672/file/original-42f52449520e8e7940c668566888d84f.png?resize=752x')`,
          width: '100vw',
          height: '100vh',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          zIndex: '0',
        }}
      />
    </div>
  );
}

export default App;
