import React from 'react';
import Numbers from "./Numbers";
import Buttons from "./Buttons";
import {useState} from "react";



function Main(props) {
    const [counter, setCounter] = useState(0)

    return (
        <div className="main">
            <Numbers counter = {counter} />
            <Buttons counter = {counter} setCounter = {setCounter} />
        </div>
    );
}

export default Main;