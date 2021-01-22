import React from 'react';

function Buttons(props) {
    function plus(){
        props.setCounter(props.counter + 3);
    }
    function minus(){
        if (props.counter >= 2){
            props.setCounter(props.counter - 2);
        }
        else{
            if(props.counter === 1)
            props.setCounter(props.counter - 1)
        }
    }
    function reset(){
        props.setCounter(0);
    }

    return (
        <div className="center">
            <button className="buts" onClick={plus}>
                Увеличить
            </button>
            <button className="buts buto" onClick={minus}>
                Уменьшить
            </button>
            <button className="buts butts" onClick={reset}>
                Сбросить
            </button>
        </div>
    );
}

export default Buttons;