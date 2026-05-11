import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './pages/calculatorCode';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
