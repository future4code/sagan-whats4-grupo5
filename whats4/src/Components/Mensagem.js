import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
border: 1px solid grey;
border-radius: 10px;
display:flex;
margin: 0;
width:50%;
background-color: #D0CFC8;
margin-left: 1%;
margin-bottom: 1%;
`

const FotoPerfil = styled.img`
width: 40px;
height: 40px;
margin-left: 1%;
margin-top: 1%;
margin-bottom: 1%;
border-radius: 50%;
`

const MensagemTexto = styled.div`
margin-top: auto;
margin-bottom:auto;
margin-left: 15px;
`

const Nome = styled.p`
margin-left: 1%;
`




class Mensagem extends React.Component {
    constructor(props){
        super(props)
        

        this.state = {
            eu: false,
            excluir: 0
        }
    }
    
    render() {
        return (
            <Main onClick={this.props.apagar}>
                <FotoPerfil src={this.props.fotoPerfil} />
                <Nome>{this.props.usuario}:</Nome>
                <MensagemTexto>
                    {this.props.mensagem}
                </MensagemTexto>
            </Main>
        )
    }
}

export default Mensagem