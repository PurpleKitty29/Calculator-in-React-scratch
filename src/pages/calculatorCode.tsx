import { useState } from "react";
import Buttons from "./buttonsCalculator";
import "../App.css"

function Calculator() {
  // Global Variables
  const [display, setDisplay] = useState("");
  const [history, setHistory] = useState("");
  const [A, setA] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const buttonValues = [
    // Actions (Clear and Back)
    { label: "Clear", type: "action" },
    { label: "Back", type: "action" },

    // Numbers and operators
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "+", type: "operator" },

    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "-", type: "operator" },

    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "×", type: "operator" },
    
    { label: "=", type: "number" },
    { label: "0", type: "number" },
    { label: ".", type: "number" },
    { label: "÷", type: "operator" },
  ]

  // Clears the whole display, history and variables
  function clearScreen(){
    setDisplay("");
    setHistory("");
    setA(null);
    setOperator(null);
  }

  // Detects the clicks
  function handleClick(val: string, type : string) {
    if (display === "Error") {
      clearScreen();
      return;
    }

    // Clear and Back options
    if (val === "Clear") {
      clearScreen();
    } 
    else if (val === "Back") {
      setDisplay((prev) => prev.slice(0, -1));
    }
    
    // Calculate if pressed =
    else if (val === "=") {
      if (A !== null && operator !== null && display !== "") {
        const B = Number(display);
        const result = calculateNumbers(A, B, operator);

        setHistory(`${A} ${operator} ${B}`);
        setDisplay(String(result));
        setA(null);
        setOperator(null);
      }
    }

    // Operators
    else if (type === "operator") {
      //Don't let start with operator
      if (A === null && display === "") return;

      // Replace operator instead of stacking multiples
      if (display === ""){
        setOperator(val);
        setHistory((prev) => prev.replace(/[\+\-\×\÷]\s*$/, `${val}`));
        return;
      }

      // Calculate expression if keep the calculation
      if (A !== null && operator !== null){
        const B = Number(display);
        const result = calculateNumbers(A, B, operator);

        if (result === "Error") {
          clearScreen();
          setDisplay("Error");
          return;
        }

        setA(Number(result));
        setDisplay("");
        setHistory(`${result} ${val}`);
        setOperator(val);
      } else {
        // Valid if operator is pressed
        setA(Number(display));
        setHistory(`${display} ${val}`);
        setDisplay("");
        setOperator(val);
      }
    } else {
      // If is a number or "."
      if (val === ".") {
        if (display.includes(".")) return;

        if (display === "" || display === "0") {
          setDisplay("0.");
          return;
        }

        setDisplay((prev) => prev + ".");
        return;
      }

      setDisplay((prev) => prev === "0" ? val : prev + val);
    }
  }

  // Calculate the numbers A and B with the operator
  function calculateNumbers(numA: number, numB: number, operator: string) {
    switch (operator) {
      case "+":
        return (numA + numB);

      case "-":
        return(numA - numB);

      case "×":
        return(numA * numB);

      case "÷":
        return numB === 0 ? "Error" : numA / numB;

      default: return numB;
    }
  }

  // Calculator HTML
  return (
    <div id="Calculator">
      <input type="text" id="history" value={history} readOnly/>
      <input type="text" id="display" value={display} readOnly/>
      <div id="buttons">
        {buttonValues.map((button) => (
          <Buttons
          key={button.label}
          value={button.label}
          type={button.type}
          onClick={() => handleClick(button.label, button.type)} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;