import React from 'react';
import MainTitle from "../../atoms/MainTitle/MainTitle";
import "./loginContent.css";

const LoginContent = ({titulo}) =>{
    return(
        <div className="loginContent--container">
            <MainTitle texto={titulo}/>
        </div>
    )
}

export default LoginContent;