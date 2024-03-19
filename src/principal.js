import React from 'react';


import Formulario from './Formulario';

import Tabela from './Tabela';
//Componente
class Principal extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            nome : '',
            idade : '',
            vetor : []
        }
    }
// onChange dinamico

    aoDigitar = (campo) => {
        this.setState({[campo.target.name] : campo.target.value});
    }

    aoClicar = (botao) => {
        botao.preventDefault();
        
        var copiaVetor = [...this.state.vetor];

        copiaVetor.push({
            'nome' : this.state.nome,
            'idade' : this.state.idade
        });

        this.setState({vetor : copiaVetor});

        this.setState({
            nome : '',
            idade : ''
        })
    }

    //render
    render(){
        return(<div>
           <Formulario  campoNome={this.state.nome}  campoIdade= {this.state.idade} funcaoBotao={this.aoClicar} funcaoCampo={this.aoDigitar} />
           <Tabela dados={this.state.vetor} />
        </div> 
        );
    }
}
export default Principal;