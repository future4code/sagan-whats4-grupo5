import React from 'react';
import './App.css';
import styled from 'styled-components';
import Mensagem from './Components/Mensagem';


const Aplicativo = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
`
const MensagensDiv = styled.div`
border: 1px solid black;
height: 94vh;
width: 55%;
display: flex;
flex-direction:column;
justify-content: flex-end;
background-color: #E7E7E7;
`

const FormularioStyle = styled.div`
width: 55%;
display: flex;
border: solid 1px black;
`
const InputNomeUsuario = styled.input`
width:15%;
margin: 5px;
`
const InputMensagem = styled.input`
width:70%;
margin: 5px;
`
const ButtonEnviar = styled.button`
width: 15%;
margin: 5px;
`




class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaDeMensagemDados: [],
            listaDeMensagens: [],
            inputNome: "",
            inputMensagem: ""
        }
    }


    inputNomeControlado = (e) => {
        this.setState({
            inputNome: e.target.value
        })
    }

    inputMensagemControlado = (e) => {
        this.setState({
            inputMensagem: e.target.value
        })
        if(e.keyCode === "enter"){
            console.log("popo")
            this.enviar()
        }
    }


    enviar = (e) => {
        
        const mensagemAuxiliar = {
            usuario: this.state.inputNome,
            mensagem: this.state.inputMensagem
        }
        let listaAuxiliar = this.state.listaDeMensagemDados
        listaAuxiliar.push(mensagemAuxiliar)
        this.setState({
            listaDeMensagemDados: listaAuxiliar
        })

        listaAuxiliar = this.state.listaDeMensagemDados.map((elemento, index)=>{
         return (<Mensagem fotoPerfil="https://image.freepik.com/vetores-gratis/icone-de-usuario-do-sexo-masculino_17-810120247.jpg" 
         usuario={elemento.usuario} mensagem={elemento.mensagem} key={index} onClick={deletar}/>)   
        })
         this.setState({
             listaDeMensagem: listaAuxiliar
         })
        //     return(<Mensagem fotoPerfil="https://image.freepik.com/vetores-gratis/icone-de-usuario-do-sexo-masculino_17-810120247.jpg" 
        //     usuario={elemento.usuario} mensagem={elemento.mensagem} />)
        // })
        
    }

    deletar = (index) => {
        console.log("kvhkgvkhgv")
        // this.setState({
        //     excluir: this.state.excluir + 1
        // })
    }


    render() {
            
        return (
            <Aplicativo>
                <MensagensDiv>
                {this.state.listaDeMensagem}
                </MensagensDiv>
                <FormularioStyle>
                    <InputNomeUsuario type="text" placeholder="Usuário" onChange={this.inputNomeControlado} value={this.state.inputNome} />
                    <InputMensagem type="text" placeholder="Mensagem" onChange={this.inputMensagemControlado} value={this.state.InputMensagem} />
                    <ButtonEnviar onClick={this.enviar}>Enviar</ButtonEnviar>
                </FormularioStyle>
            </Aplicativo>
        )
    }
}

export default App

/* <Mensagem fotoPerfil="https://image.freepik.com/vetores-gratis/icone-de-usuario-do-sexo-masculino_17-810120247.jpg" usuario="" mensagem="" /> */