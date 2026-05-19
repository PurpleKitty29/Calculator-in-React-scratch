import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Error404 from './pages/Error404';
import { Calculator } from './pages/calculator';
import { History } from './pages/history';
import React, { createContext, useState, useEffect } from 'react';

interface Result {
  calc: string;
  total: string;
}

export interface AppContextType {
  results: Result[];
  setResults: React.Dispatch<React.SetStateAction<Result[]>>;
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  history: string;
  setHistory: React.Dispatch<React.SetStateAction<string>>;
  A: number | null;
  setA: React.Dispatch<React.SetStateAction<number | null>>;
  operator: string | null;
  setOperator: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AppContext = createContext<AppContextType | null>(null);

function App() {
  const [results, setResults] = useState<Result[]>([]);
  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState('');
  const [A, setA] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  useEffect(() => {
    const a = localStorage.getItem('A');
    if (a != 'null' && a != null) {
      setA(parseInt(a));
    }

    const _display = localStorage.getItem('display');
    const _history = localStorage.getItem('history');
    const _operator = localStorage.getItem('operator');
    const _results = localStorage.getItem('results');

    if (_display != 'null' && _display != null) setDisplay(_display);
    if (_history != 'null' && _history != null) setHistory(_history);
    if (_operator != 'null' && _operator != null) setOperator(_operator);
    if (_results != 'null' && _results != null)
      setResults(JSON.parse(_results));
  }, []);

  useEffect(() => {
    persistInLocalStorage();
  });

  const persistInLocalStorage = () => {
    localStorage.setItem('display', display);
    localStorage.setItem('history', history);
    localStorage.setItem('A', String(A));
    localStorage.setItem('operator', String(operator));
    localStorage.setItem('results', JSON.stringify(results));
  };

  return (
    <AppContext.Provider
      value={{
        results,
        setResults,
        display,
        setDisplay,
        history,
        setHistory,
        A,
        setA,
        operator,
        setOperator,
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/Calculator-in-React-scratch/" element={<Calculator />} />
        <Route path="/Calculator-in-React-scratch/history" element={<History />} />
        <Route path="/Calculator-in-React-scratch/*" element={<Error404 />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
