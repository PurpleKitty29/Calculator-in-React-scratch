import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Error404 from './pages/Error404';
import { Calculator } from './pages/calculator';
import { History } from './pages/history';
import { createContext, useState } from 'react';

export const AppContext = createContext(null) as any;

function App() {
  const [results, setResults] = useState([]);

  return (
    <AppContext value={{ results, setResults }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/history" element={<History />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </AppContext>
  );
}

export default App;
