import React,{useState} from 'react';
import { evaluate } from 'mathjs';

import './Calculator.css'

const Calculator=()=>{

    const calculatorButtons=['C','Back','%','/','7','8','8','*','4','5','6','-','1','2','3','+','00','0','.','='];

    const [expression,setExpression]=useState("");

    const handleClick=(value)=>{
        if(value==='C'){
            setExpression("");
        }
        else if(value==='='){
            try {
                const output = evaluate(expression);
                setExpression(output.toString());
            } catch (e) {
                setExpression("Error");
            }
        }else {
            setExpression(prev=>prev+value)
        }
    }

    return (
        <div className='calculator'>
            <div>{expression}</div>
            {calculatorButtons.map((calculatorButton,index)=>(
                <input type='button' value={calculatorButton} key={index} onClick={()=>{handleClick(calculatorButton)}}/>
            ))}
        </div>
    )
}

export default Calculator;