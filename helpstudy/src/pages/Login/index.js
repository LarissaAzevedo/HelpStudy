import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

class Login extends Component {
    render() {
        return (
            <div className="pag_login">
                <Header />
                <div className="container">
                    <select id="select_usuario" defaultValue="Tipo de usuário">
                        <option value="">Aluno</option>
                        <option value="">Professor</option>
                    </select>
                    <form>
                        <label>Email</label>
                        <input type="email"></input>
                        <br></br>
                        <label>Senha</label>
                        <input type="password"></input>
                    </form>
                    <div className="btns">
                        <button>Entrar</button>
                        <button>Cadastrar</button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Login;