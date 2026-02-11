import { useState, useRef } from "react";
import { evaluate } from "mathjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import beepSound from "./beep-08b.mp3";

export const Calci = () => {

    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    const audioRef = useRef(null);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    const handleClick = (value) => {
        playSound();
        setExpression(expression + value);
    };

    const calculate = () => {
        playSound();
        try {
            const res = evaluate(expression);
            setResult(res);
        } catch {
            setResult("Error");
        }
    };



    const clear = () => {
        playSound();
        setExpression("");
        setResult("");
    };

    return (

        <div className="app-wrapper">
            <audio ref={audioRef} src={beepSound} preload="auto" />

            <div className="container calculator mt-2 p-3">

                <div className="header d-flex align-items-center justify-content-center mb-3">
                    <div className="logo">M</div>
                    <h4 className="ms-2 mb-0">React Calculator</h4>
                </div>

                <div className="screen-section p-3 mb-3">
                    <div className="expression text-end">
                        {expression || "0"}
                    </div>
                    <div className="result text-end">
                        {result || "0"}
                    </div>
                </div>

                <div className="row text-center">

                    <div className="col-3 p-1">
                        <button className="btn-custom" onClick={() => handleClick("7")} onTouchStart={playSound}>7</button>
                    </div>
                    <div className="col-3 p-1">
                        <button className="btn-custom" onClick={() => handleClick("8")} onTouchStart={playSound}>8</button>
                    </div>
                    <div className="col-3 p-1">
                        <button className="btn-custom" onClick={() => handleClick("9")} onTouchStart={playSound}>9</button>
                    </div>
                    <div className="col-3 p-1">
                        <button className="btn-custom operator" onClick={() => handleClick("/")} onTouchStart={playSound}>/</button>
                    </div>

                </div>

                <div className="row text-center">

                    <div className="col-3 p-1">
                        <button className="btn-custom" onClick={() => handleClick("4")} onTouchStart={playSound}>4</button>
                    </div>
                    <div className="col-3 p-1">
                        <button className="btn-custom" onClick={() => handleClick("5")} onTouchStart={playSound}>5</button>
                    </div>
                    <div className="col-3 p-1">
                        <button className="btn-custom" onClick={() => handleClick("6")} onTouchStart={playSound}>6</button>
                    </div>
                    <div className="col-3 p-1">
                        <button className="btn-custom operator" onClick={() => handleClick("*")} onTouchStart={playSound}>*</button>
                    </div>

                </div>

                <div className="row text-center">

                    <div className="col-3 p-1">
                        <button className="btn-custom" onClick={() => handleClick("1")} onTouchStart={playSound}>1</button>
                    </div>
                    <div className="col-3 p-1">
                        <button className="btn-custom" onClick={() => handleClick("2")} onTouchStart={playSound}>2</button>
                    </div>
                    <div className="col-3 p-1">
                        <button className="btn-custom" onClick={() => handleClick("3")} onTouchStart={playSound}>3</button>
                    </div>
                    <div className="col-3 p-1">
                        <button className="btn-custom operator" onClick={() => handleClick("-")} onTouchStart={playSound}>-</button>
                    </div>

                </div>

                <div className="row text-center">

                    <div className="col-3 p-1">
                        <button className="btn-custom" onClick={() => handleClick("0")} onTouchStart={playSound}>0</button>
                    </div>
                    <div className="col-3 p-1">
                        <button className="btn-custom operator" onClick={() => handleClick("+")} onTouchStart={playSound}>+</button>
                    </div>
                    <div className="col-3 p-1">
                        <button className="btn-custom equal" onClick={calculate} onTouchStart={playSound}>=</button>
                    </div>
                    <div className="col-3 p-1">
                        <button className="btn-custom clear" onClick={clear} onTouchStart={playSound}>C</button>
                    </div>

                </div>

            </div>

        </div>

    );
};
