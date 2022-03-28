import {
  LoginContainer,
  LoginEsquerda,
  LoginDireita,
  LoginCartao,
  LoginCampoTexto
} from './styles';
import { Botao } from '../../componentes/Botao';
import { validaLogin } from '../../servicos/api';
import share from '../../assets/home/share.svg';


export const Home = () => {

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        validaLogin(evento);
      }}
    >
      <LoginContainer>
        <LoginEsquerda>
          <h1>Faça login<br />E entre para o Fatec Share</h1>
          <img src={share} alt="Share" />
        </LoginEsquerda>
        <LoginDireita>
          <LoginCartao>
            <h1>LOGIN</h1>
            <LoginCampoTexto>
              <label for="usuario">Usuário</label>
              <input type="text" name="usuario" placeholder="Usuário" />
            </LoginCampoTexto>
            <LoginCampoTexto>
              <label for="senha">Senha</label>
              <input type="password" name="senha" placeholder="Senha" />
            </LoginCampoTexto>
            <Botao texto="login" primario />
            <Botao texto="cadastro" href="/cadastro" />
          </LoginCartao>
        </LoginDireita>
      </LoginContainer>
    </form>
  )
}
