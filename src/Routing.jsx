import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Normal from './Normal';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/normal" element={<Normal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
