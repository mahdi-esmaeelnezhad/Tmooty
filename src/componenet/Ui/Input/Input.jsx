import React from "react";
import "./Input.css"
const Input = (props) => {
    let inputElement = null
     const inputClass = ["inputElement"]

     if(props.inValid && props.used){
        inputClass.push('inValid')
     }

    switch (props.inputType) {
        case 'input' :
            inputElement = <input
            className={inputClass.join(' ')} 
            {...props.elementConfig} 
            value = {props.value}
            onChange={props.change}
            />
        break
        default :
            inputElement = <input 
            className={inputClass.join(' ')}
            {...props.elementConfig} 
            value = {props.value}
            onChange={props.change} 
    />

    }
    return(<div className="input">{inputElement}</div>)
}

export default Input 