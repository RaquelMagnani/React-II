import React , {Component} from "react" ;
import GeneralTemplate from "../../templates/GeneralTemplate/GeneralTemplate"
import HomeContent from "../../components/organisms/HomeContent/HomeContent";
import "./home.css"

class Home extends Component{
    constructor(){
        super();

        this.state={
            inputValue:"",
            data:[],
            filters:["Todos","Front","Back","Design", "Junior","Pleno" ,"Senior"]
        };
    }
    componentDidMount = async()=>{
        console.log("o componente foi montado!")
        const getData = await this.props.data;
        this.setState({data:getData});
        console.log(this.state.data)
    }

    

    onClick = async () => {
        const{inputValue} = this.state;
        const {data} = this.props;

        if(inputValue && data.length){
         const result = await data.filter(item => 
            item.position.toLowerCase().includes(inputValue.toLowerCase()
        ));

        console.log({result});

        this.setState({inputValue:"",data:result});
    }else{
        console.log({data})
    }
      };
    
      onChange = (e) => {
          const value = e.target.value;
        console.log(value);
        this.setState({ inputValue : value})
      };

    handleFilters =(e)=> {
        const{data} = this.props;
        const value = e.target.id.toLowerCase();

        const result = data.filter(item =>{
            switch(value){
                case "todos":
                    return item;
                default:
                    return item.position.toLowerCase().includes(value);
            }
        });
        this.setState({data:result});

        console.log(value)
    }

    render(){
        console.log("o render foi chamado!")
        const{inputValue,data,filters}=this.state;
        const{logout,loggedUser}=this.props;
        return(
            <GeneralTemplate logout={logout} loggedUser={loggedUser}>
                <HomeContent
                texto="Buscar" 
                onClick={this.onClick}
                type="text" 
                placeholder= "o que você procura" 
                titulo="TechJobs"
                value={inputValue} 
                data={data}
                filters={filters}
                onChange={this.onChange}
                handleFilters={this.handleFilters}
                />
            </GeneralTemplate>
        )
    }
}

export default Home;