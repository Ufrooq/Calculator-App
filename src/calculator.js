import React, { useState } from 'react';

export default function Calculator() {

    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(`${result}${e.target.value}`);
    }

    const clearDisplay = (e) => {
        setResult("");
    }

    const calcNumbers = () => {
        setResult(eval(result).toString());
    }


    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={handleClick} value={i} >{i}</button>
            )
        }
        return digits;
    }
    return (
        <div className="container-fluid">
            <div className="calculator">
                <div className="display">
                    <input type="text" id='number' placeholder='0' value={result} />
                </div>
                <div className="operators">
                    <button onClick={handleClick} value="+">+</button>
                    <button onClick={handleClick} value="-">-</button>
                    <button onClick={handleClick} value="/">/</button>
                    <button onClick={handleClick} value="*">*</button>
                    <button onClick={clearDisplay}>DEL</button>
                </div>
                <div className="digits">
                    {createDigits()}
                    <button onClick={handleClick} value="0">0</button>
                    <button onClick={handleClick} value=".">.</button>
                    <button onClick={calcNumbers}>=</button>
                </div>
            </div>
        </div>
    )
}
