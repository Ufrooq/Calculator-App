import React from "react";
// import React, { useState } from "react";
import ReactDOM from "react-dom";
import Calculator from "./calculator";
// import Form from "./form";
// import Jack from "./jack";
// import Input from "./input";
// import Journey from "./journey";
// import Monster from "./monster";
// import Sntate from "./sntate";
// import Jumbo from "./jambo";
// import Drop from "./drop";
import "./style.css";
// import React, { useState } from "react";

var Input = () => {

    // const [umer, setUmer] = useState([]);

    // var handleSubmit = (e) => {
    //     e.preventDefault();
    //     const first = e.target.item.value;
    //     const last = e.target.prise.value;
    //     // console.log(first);
    //     // console.log(last);
    //     setUmer(first);
    // };
    return (
        <>
            <Calculator />
            {/* <Form /> */}
            {/* <Jumbo /> */}
            {/* <Drop /> */}
        </>



        // <div className="container mt-5">
        //     <form onSubmit={handleSubmit}>
        //         <div className="row input bg-light">
        //             <div className="col-6">
        //                 Item-Name : <input type="text" name="item" />
        //                 <br /><br />
        //                 Price-in-PKr : <input type="number" name="prise" />
        //             </div>
        //             <div className="col-4">
        //                 <button className="btn btn-primary">Add Now</button>
        //             </div>
        //         </div>
        //         <div className="row  input2 mt-3">
        //             <div className="col-12 ">
        //                 <h3>List Of Items:</h3>
        //                 <div className="col-6 ">
        //                     <ul>
        //                         <li>
        //                             {umer}
        //                         </li>
        //                         <li>
        //                         </li>
        //                         <li>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </form>
        // </div>
    )
}


ReactDOM.render(
    <Input />,
    document.querySelector('#root')
);