import React from "react";
import "./button.css";


const Button = ({texto,onClick}) => {
    return(
        <div className="btn--comtainer">
            <button onClick={onClick} >{texto}</button>
        </div>
    )
}

export default Button;