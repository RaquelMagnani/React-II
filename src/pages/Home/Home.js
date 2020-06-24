import React , {Component} from "react" ;
import GeneralTemplate from "../../templates/GeneralTemplate/GeneralTemplate"
import HomeContent from "../../components/organisms/HomeContent/HomeContent";
import "./home.css"

class Home extends Component{
    constructor(){
        super();

        this.state={
            inputValue:"",
            data:[]
        };
    }
    componentDidMount = async()=>{
        console.log("o componente foi montado!")
        const getData = await this.props.data;
        this.setState({data:getData});
        console.log(this.state.data)
    }

    

    onClick = async () => {
        const{inputValue,data} = this.state;

        if(inputValue && data.length){

        const result = await data.filter(item => item.position.toLowerCase().includes(inputValue.toLowerCase()
        ));

        console.log({result});

        this.setState({inputValue:""});
    }else{
        console.log("sem imput ou sem data")
    }
      };
    
      onChange = (e) => {
          const value = e.target.value;
        console.log(value);
        this.setState({ inputValue : value})
      };

    render(){
        console.log("o render foi chamado!")
        const{inputValue,data}=this.state
        return(
            <GeneralTemplate>
                <HomeContent
                texto="Buscar" 
                onClick={this.onClick}
                type="text" 
                placeholder= "o que você procura" 
                value={inputValue} 
                data={data}
                onChange={this.onChange}
                />
            </GeneralTemplate>
        )
    }
}

export default Home;