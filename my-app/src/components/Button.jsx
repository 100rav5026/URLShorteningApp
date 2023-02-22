import React from "react";

function Button(props){
    return(
        <button type={props.type} className={props.className}>{props.buttonText}</button>
    )
}

export default Button;