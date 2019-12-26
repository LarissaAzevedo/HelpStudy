import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className="banner"></div>
        <div className="container">
        <h1>Help study</h1>
          <div className="card">

            <form >
              <div classNameName="container">
                <input
                  type="text"
                  id="nome-tipo-evento"
                  placeholder="Procure uma matéria"
                // value é o que o input recebe, então é esse o componente com estado
                // value={this.state.nome}
                // o estado estaria fixo se não houvesse o onChange, logo, bloquearia o input
                // onChange={this.atualizaNome.bind(this)}
                />
                <button
                  classNameName="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
