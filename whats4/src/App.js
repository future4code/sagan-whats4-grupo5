import React from 'react';
import './App.css';
import styled from 'styled-components';

const Aplicativo = styled.div`

`
const FormularioStyle = styled.form`
width: 100%;
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



    render() {
        return (
            <Aplicativo>
                <FormularioStyle>
                    <InputNomeUsuario type="text" placeholder="Usuário" onChange={this.inputNomeControlado} value={this.state.inputNome} />
                    <InputMensagem type="text" placeholder="Mensagem" onChange={this.inputMensagemControlado} value={this.state.InputMensagem} />
                    <ButtonEnviar>Enviar</ButtonEnviar>
                </FormularioStyle>
            </Aplicativo>
        )
    }
}

export default App