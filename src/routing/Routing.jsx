import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../pages/App';
import Normal from '../pages/Normal';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/normal" element={<Normal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
