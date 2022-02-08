import React from "react";

import ReactDOM from "react-dom";
import Calculator from "./calculator";

import "./style.css";


var Input = () => {

    return (
        <>
            <Calculator />
        </>
    )
}


ReactDOM.render(
    <Input />,
    document.querySelector('#root')
);