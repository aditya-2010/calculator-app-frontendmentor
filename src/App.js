import { useState } from "react";
import { evaluate } from "mathjs";
import ThemeSwitcher from "./ThemeSwitcher";

const operations = ["+", "-", "/", "*", "."];

function App() {
  const [current, setCurrent] = useState("");

  function handleClick(value) {
    if (
      (operations.includes(value) && current === "") ||
      (operations.includes(value) && operations.includes(current.slice(-1)))
    )
      return;

    if (value === "=") {
      setCurrent((curr) => evaluate(curr).toString());
      return;
    }
    setCurrent(current + value);
  }

  function handleDelete() {
    setCurrent((curr) => curr.slice(0, -1));
  }

  function handleReset() {
    setCurrent("");
  }

  return (
    <div className="calculator">
      <header className="header">
        <div className="title">calc</div>
        <ThemeSwitcher />
      </header>
      <div className="output">
        <div className="current-operand">{current || "0"}</div>
      </div>
      <div className="calc-grid">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={handleDelete} className="btn-dark">
          DEL
        </button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>x</button>
        <button onClick={handleReset} className="span-2 btn-dark">
          RESET
        </button>
        <button onClick={() => handleClick("=")} className="span-2 btn-equal">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
