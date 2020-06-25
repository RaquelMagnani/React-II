import React , {Component} from 'react';
import "./signUp.css"
import GeneralTemplate from '../../templates/GeneralTemplate/GeneralTemplate';

class SignUp extends Component{
    constructor(){
        super();

        this.state={

        }
    }

    onFinish = (value)=>{
        console.log("dados enviados",value)
    }

    render(){
        return(
            <GeneralTemplate>
                <SignUp
                titulo="Faça seu cadastro"
                onFinish={this.onFinish}
                />
            </GeneralTemplate>    

        )
    }

}
export default SignUp;