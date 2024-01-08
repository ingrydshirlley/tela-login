import React from 'react';
import './App.css';
import image from './svg.png';
import icon from './icon.png'

function App() {
  return (
    <div className="app">
      <div className="imagem">
        <img src={image} alt="imagem" />
      </div>

      <div className="conteudo">
        <form>
          <div className="texts">
            <span>Bem-vindo de volta!</span>
            <h2>Faça login na sua conta</h2>
          </div>

          <div className="form-group">
            <label htmlFor="InputEmail" className="label"> Email </label>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="exemplo@gmail.com" />
          </div>

          <div className="form-group">
            <label htmlFor="InputPassword" className="label"> Senha </label>
            <input type="password" className="form-control" placeholder="0123456789" />
          </div>

          <div className="baixo">
            <div className="form-check">
              <input type="checkbox" className="check-input" />
              <label className="form-check-label" htmlFor="Check">Lembre de mim</label>
            </div>

            <div className="esquecer">
              <small className="small">Esqueceu a senha?</small>
            </div>
          </div>

          <div className="button-group">
            <button type="submit" id="btn">Entrar na conta</button>
            <button type="submit" className="btn2"> <img src={icon} alt="google" /> Ou faça login com o google</button>
          </div>

          <span className='span'>Não tem uma conta? <span>Cadastre-se</span> </span>
        </form>
      </div>
    </div>
  );
}

export default App;
