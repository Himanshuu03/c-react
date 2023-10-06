import React ,{Component} from "react"


export class State extends Component{

   state = {
    name:"My Name",
    counter :1,
   }
   handleChange = () =>{
    let newName = this.state.name;
    if(newName === "Himanshu"){
        this.setState({
            name : "My Name"
        })
    }
    else{
        this.setState({
            name:"Himanshu"
        })
    }
   }

   handleCounter = (event) =>{
    if(event.target.id === "inc") 
    {
        this.setState({
            counter:this.state.counter+1,
          })
    }
    else if(event.target.id === "dec"){
        this.setState({
            counter:this.state.counter+2,
          })
    }
    else{
        this.setState({
            counter:this.state.counter+5,
          })
    }

   }

    render(){
        return(
            <>
            <h1>
                This is class based Components
                Made by {this.state.name}
            </h1>
            <button onClick={this.handleChange}>
                Change name
            </button>
            <h1>Counter</h1>
            <h2>{this.state.counter}</h2>
            <button onClick={this.handleCounter} id ="inc">Inc</button>
            <button onClick={this.handleCounter} id ="dec">Inc 2</button>
            <button onClick={this.handleCounter} id ="res">Inc 5</button>
            </>
        )
    }
}

export default State;

