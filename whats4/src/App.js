import React from 'react';
import './App.css';
// import Formulario from './Formulario/Formulario'
import styled from 'styled-components';

const ContainerGeral = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Containerform = styled.div`
width: 50%
`

const FormularioStyle = styled.form`
width: 100%;
display: flex;
border: solid 1px black;
`
const InputNomeUsuario = styled.input`
width:15%;
margin: 5px
`
const InputMensagem = styled.input`
width:70%;
margin: 5px;
`
const ButtonEnviar = styled.button`
width: 15%;
margin: 5px
`

class Formulario extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <Containerform>
            <FormularioStyle>
            <InputNomeUsuario type="text" placeholder="Usuário"/>
            <InputMensagem type="text" placeholder="Mensagem"/>
            <ButtonEnviar>Enviar</ButtonEnviar>
            </FormularioStyle>
            </Containerform>
        )
    }
}

function App() {
  return (
    <ContainerGeral>
    <Formulario />
    </ContainerGeral>
  );
}

export default App;
