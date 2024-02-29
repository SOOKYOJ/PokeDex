import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../pages/App';
import Normal from '../pages/1.Normal';
import Fire from '../pages/2.Fire';
import Electric from '../pages/3.Electric';
import Grass from '../pages/4.Grass';
import Ice from '../pages/5.Ice';
import Fighting from '../pages/6.Fighting';
import Poison from '../pages/7.Poison';
import Ground from '../pages/8.Ground';
import Flying from '../pages/9.Flying';
import Psychic from '../pages/10.Psychic';
import Bug from '../pages/11.Bug';
import Rock from '../pages/12.Rock';
import Ghost from '../pages/13.Ghost';
import Dragon from '../pages/14.Dragon';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/normal" element={<Normal />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/grass" element={<Grass />} />
        <Route path="/ice" element={<Ice />} />
        <Route path="/fighting" element={<Fighting />} />
        <Route path="/poison" element={<Poison />} />
        <Route path="/ground" element={<Ground />} />
        <Route path="/flying" element={<Flying />} />
        <Route path="/phychic" element={<Psychic />} />
        <Route path="/bug" element={<Bug />} />
        <Route path="/rock" element={<Rock />} />
        <Route path="/ghost" element={<Ghost />} />
        <Route path="/dragon" element={<Dragon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
