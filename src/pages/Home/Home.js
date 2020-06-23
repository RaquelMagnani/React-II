import React , {Component} from "react" ;
import GeneralTemplate from "../../templates/GeneralTemplate/GeneralTemplate"
import HomeContent from "../../components/organisms/HomeContent/HomeContent";
import "./home.css"

class Home extends Component{
    constructor(){
        super();

        this.state={inputValue:""}
    }
    onClick = () => {
        console.log("click");
      };
    
      onChange = () => {
        console.log("click");
      };

    render(){
        return(
            <GeneralTemplate>
                <HomeContent
                texto="Buscar" 
                onClick={this.onClick}
                type="text" 
                placeholder= "o que você procura" 
                value={this.state.inputvalue} 
                onChange={this.onChange}
                />
            </GeneralTemplate>
        )
    }
}

export default Home;