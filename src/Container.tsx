//Props -> é utilizado para passar dados diferente para cada componemte em sua criação
//States -> Estados, salvam estados de variáveis do react e quando esses estados muda.
// Automaticamente o React entende que ele precisa atualizar a página para mostrar 
// os novos valores do componente.
/*
function Container () {
    return (
        <header>
            <h1>Header</h1>
        </header>
    )
}
*/
//Class

//import { useState } from "react"

/*import React from 'react'
interface ContainerProps {
    nome: string,
}
interface ContainerInfoState{
    nome: string
}

//Container é filha de React.Component (herança -> herda os atributos)
class Container extends React.Component<ContainerProps,ContainerInfoState>{
    constructor(props: ContainerInfoState){
        super(props)
        this.state = {
            nome: "Nome antes de Mudar"
        }
    }
    mudar = ()=>{
        this.setState({nome: "Nome depois de Mudar"})
    }
    render(): React.ReactNode {
        return (
            <>
             <h1>{this.props.nome}</h1>
             <p>{this.state.nome}</p>
             <button onClick={this.mudar}>Mudar Estado</button>
            </>           
        )
    }
}*/
import { useState } from "react"
interface ContainerProps {
    nome: string
}
function Container (props:ContainerProps){
    const [texto,setTexto] = useState("Texto Antes de Mudar")
    function mudar(){
        setTexto ("Texto Depois de Mudar")
    }
    return(
        <>
          <h1>{props.nome}</h1>
          <p>{texto}</p>
          <button onClick={mudar}>Mudar</button>
        </>
    )
}
export default Container