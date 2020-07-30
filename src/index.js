import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import CadastroVídeo from './Pages/cadastro/Video'
import CadastroCategoria from './Pages/cadastro/Categoria';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cadastro/video" component={CadastroVídeo} /> 
            <Route path="/cadastro/categoria" component={CadastroCategoria} /> 
            <Route component={Pagina404} />
        </Switch>  
    </BrowserRouter>,

    document.getElementById('root')
    );
    
    
    /*<React.StrictMode> 
         <App />
     </React.StrictMode>,*/ 
