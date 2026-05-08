import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Calculator from "./pages/calculatorCode";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App
