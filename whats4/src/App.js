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

const FormularioStyle = styled.form`
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
            listaDeMensagem: [],
            inputNome: "",
            InputMensagem: ""
        }
    }


    inputNomeControlado = (e) => {
        this.setState({
            inputNome: e.target.value
        })
    }

    inputMensagemControlado = (e) => {
        this.setState({
            InputMensagem: e.target.value
        })
    }


    enviar(e) {
        const mensagemAuxiliar = {
            usuario: this.state.inputUsuarioControlado,
            mensagem: this.state.inputMensagemControlado
        }

        // let listaDeMensagemAuxiliar = listaDeMensagem.map((elemento)=>{
        //     return()
        // })
    }


    render() {
        return (
            <Aplicativo>
                <MensagensDiv>
                    <Mensagem fotoPerfil="https://image.freepik.com/vetores-gratis/icone-de-usuario-do-sexo-masculino_17-810120247.jpg" usuario="Usuario" mensagem="Oi, tudo bem?" />
                </MensagensDiv>
                <FormularioStyle>
                    <InputNomeUsuario type="text" placeholder="Usuário" onChange={this.inputUsuarioControlado} value={this.state.inputUsuario} />
                    <InputMensagem type="text" placeholder="Mensagem" onChange={this.inputMensagemControlado} value={this.state.InputMensagem} />
                    <ButtonEnviar onClick={this.enviar} >Enviar</ButtonEnviar>
                </FormularioStyle>
            </Aplicativo>
        )
    }
}

export default App