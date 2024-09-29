import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';

function App() {
  const [defaults, setDefaults] = useState<string>("0");
  const [first, setFirst] = useState<number>(0);
  const [operand, setOperand] = useState<string>("");
  const [res, setRes] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  const handleC = () => {
    setDefaults("0");
    setOperand("");
    setRes("");
    setFirst(0);
  }

  const buttonOne = () => {
    console.log(defaults, operand);
    if(defaults === "0" || (operand!=""&&isNaN(parseInt(defaults)))) {
      setDefaults("1");
    } else {
      setDefaults(defaults.concat("1"));
    }

    if(res!="") {
      setRes("");
      setDefaults("1");
    }
  }

  const buttonTwo = () => {
    if(defaults === "0" || (operand!=""&&isNaN(parseInt(defaults)))) {
      setDefaults("2");
    } else {
      setDefaults(defaults.concat("2"));
    }

    if(res!="") {
      setRes("");
      setDefaults("2");
    }
  }

  const buttonThree = () => {
    if(defaults === "0" || (operand!=""&&isNaN(parseInt(defaults)))) {
      setDefaults("3");
    } else {
      setDefaults(defaults.concat("3"));
    }

    if(res!="") {
      setRes("");
      setDefaults("3");
    }
  }

  const buttonFour = () => {
    if(defaults === "0" || (operand!=""&&isNaN(parseInt(defaults)))) {
      setDefaults("4");
    } else {
      setDefaults(defaults.concat("4"));
    }

    if(res!="") {
      setRes("");
      setDefaults("4");
    }
  }

  const buttonFive = () => {
    if(defaults === "0" || (operand!=""&&isNaN(parseInt(defaults)))) {
      setDefaults("5");
    } else {
      setDefaults(defaults.concat("5"));
    }

    if(res!="") {
      setRes("");
      setDefaults("5");
    }
  }

  const buttonSix = () => {
    if(defaults === "0" || (operand!=""&&isNaN(parseInt(defaults)))) {
      setDefaults("6");
    } else {
      setDefaults(defaults.concat("6"));
    }

    if(res!="") {
      setRes("");
      setDefaults("6");
    }
  }

  const buttonSeven = () => {
    if(defaults === "0" || (operand!=""&&isNaN(parseInt(defaults)))) {
      setDefaults("7");
    } else {
      setDefaults(defaults.concat("7"));
    }

    if(res!="") {
      setRes("");
      setDefaults("7");
    }
  }

  const buttonEight = () => {
    if(defaults === "0" || (operand!=""&&isNaN(parseInt(defaults)))) {
      setDefaults("8");
    } else {
      setDefaults(defaults.concat("8"));
    }

    if(res!="") {
      setRes("");
      setDefaults("8");
    }
  }

  const buttonNine = () => {
    if(defaults === "0" || (operand!=""&&isNaN(parseInt(defaults)))) {
      setDefaults("9");
    } else {
      setDefaults(defaults.concat("9"));
    }

    if(res!="") {
      setRes("");
      setDefaults("9");
    }
  }

  const buttonZero = () => {
    if(defaults === "0" || (operand!=""&&isNaN(parseInt(defaults)))) {
      setDefaults("0");
    } else {
      setDefaults(defaults.concat("0"));
    }

    if(res!="") {
      setRes("");
      setDefaults("0");
    }
  }

  function checkRes() {
    if(res!="") {
      setFirst(parseInt(res));
    } else {
      setFirst(parseInt(defaults));
    }
  }

  const buttonAdd = () => {
    checkRes();
    setDefaults("+");
    setOperand("+");
    setRes("");
  }

  const buttonSubstract = () => {
    checkRes();
    setDefaults("-");
    setOperand("-");
    setRes("");
  }

  const buttonDivide = () => {
    checkRes();
    setDefaults("/");
    setOperand("/");
    setRes("");
  }

  const buttonX = () => {
    checkRes();
    setDefaults("x");
    setOperand("x");
    setRes("");
  }

  const buttonDEL = () => {
    if(defaults.length<2) {
      if(defaults==="+"||defaults==="-"||defaults==="x"||defaults==="/") {
        setDefaults(first.toString());
      } else {
        setDefaults("0");
      }
    } else {
      setDefaults(defaults.slice(0,-1));
    }
  }

  function insertHistory(res: string) {
    if(isNaN(parseInt(res))) {
      setHistory(["Err", ...history]);
    } else {
      setHistory([res, ...history]);
    }
  }

  const equal = () => {
    switch(operand) {
      case "+":
        setRes(isNaN((first + parseInt(defaults)))?"Err":(first + parseInt(defaults)).toString());
        setDefaults("");
        insertHistory((first + parseInt(defaults)).toString());
        break;
      case "-":
        setRes(isNaN((first - parseInt(defaults)))?"Err":(first - parseInt(defaults)).toString());
        setDefaults("");
        insertHistory((first - parseInt(defaults)).toString());
        break;
      case "x":
        setRes(isNaN((first * parseInt(defaults)))?"Err":(first * parseInt(defaults)).toString());
        setDefaults("");
        insertHistory((first * parseInt(defaults)).toString());
        break;
      case "/":
        setRes(isNaN((first / parseInt(defaults)))||((first / parseInt(defaults)))===Infinity?"Err":(first / parseInt(defaults)).toString());
        setDefaults("");
        insertHistory((first / parseInt(defaults)).toString());
        break;
    }
  }

  const navigate = useNavigate();

  const navigateToHelp = () => {
    navigate('/helppage');
  }

  return (
    <div className="main">
    <div className="Calculator">
      <div className="result">
        <div className="history">
          {history.map ((element, index) => {return(<><p key={index}>{element}</p></>)})}
        </div>
        <p>{defaults}{res}</p>
      </div>
      <div className="buttons">
        <button className="C" onClick={handleC}>C</button>
        <button className="DEL" onClick={buttonDEL}>DEL</button>
        <button className="help" onClick={navigateToHelp}>?</button>
        <button className="divide" onClick={buttonDivide}>/</button>
        <button className="one" onClick={buttonOne}>1</button>
        <button className="two" onClick={buttonTwo}>2</button>
        <button className="three" onClick={buttonThree}>3</button>
        <button className="X" onClick={buttonX}>x</button>
        <button className="four" onClick={buttonFour}>4</button>
        <button className="five" onClick={buttonFive}>5</button>
        <button className="six" onClick={buttonSix}>6</button>
        <button className="substract" onClick={buttonSubstract}>-</button>
        <button className="seven" onClick={buttonSeven}>7</button>
        <button className="eight" onClick={buttonEight}>8</button>
        <button className="nine" onClick={buttonNine}>9</button>
        <button className="add" onClick={buttonAdd}>+</button>
        <button className="zero" onClick={buttonZero}>0</button>
        <button className="equal" onClick={equal}>=</button>
      </div>
    </div>
    </div>
  );
}

export default App;
