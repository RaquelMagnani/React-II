import React from 'react';
import MainTitle from '../../atoms/MainTitle/MainTitle';
import FormSignUp from '../../molecules/FormSignUp/FormSignUp';
import "./signUpContent.css";


const SignUpContent = ({titulo, onFinish,login})=>{
    return(
        <main className="signUpContent--container">
            <MainTitle texto={titulo}/>
            <FormSignUp onFinish={onFinish}
            login={login}/>

        </main>
    )
}

export default SignUpContent