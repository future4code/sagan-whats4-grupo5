import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
border: 1px solid grey;
display:flex;
margin: 0;
width:50%;
`

const FotoPerfil = styled.img`
width: 40px;
height: 40px;
margin-left: 15px;
`

const MensagemTexto = styled.div`
margin-top: auto;
margin-bottom:auto;
margin-left: 15px;
`


class Mensagem extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            eu: false,
            fotoPerfil : "https://image.freepik.com/vetores-gratis/icone-de-usuario-do-sexo-masculino_17-810120247.jpg",
            mensagem : "Oi, tudo Bem?"
        }
    }
    
    render() {

        return (
            <Main>
                <FotoPerfil src={this.state.fotoPerfil} />
                <MensagemTexto>
                    {this.state.mensagem}
                </MensagemTexto>
            </Main>
        )
    }
}

export default Mensagem