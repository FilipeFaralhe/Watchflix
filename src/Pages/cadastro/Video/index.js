import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroVídeo() {
    return (
        <PageDefault>
            <h1>Página de cadastro</h1>
            
            <Link to='/cadastro/categoria'>
                cadastrar categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVídeo;