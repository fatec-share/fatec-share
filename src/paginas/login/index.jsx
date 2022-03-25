import {
  ContainerLogin,
  NomeAppPrincipal,
  NomeAppSecundario,
  CampoInput,
  RetanguloLogin,
  MargemNomeApp,
  TextoRetangulo,
  BotaoEntrar,
  BotaoAbrirConta,
} from "./styles";

import axios from "axios";
const Login = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        (async () => {
          try {
            const resposta = await axios.post(
              "http://localhost:3001/usuarios/login",
              {
                email: event.target.email.value,
                senha: event.target.senha.value,
              }
            );
            console.log(`Usuário ${resposta.data.nome} logado com sucesso!`);
          } catch (error) {
            console.log("Usuário ou senha incorretos!");
          }
        })();
      }}
    >
      <ContainerLogin>
        <MargemNomeApp>
          <NomeAppPrincipal>Fatec</NomeAppPrincipal>
          <NomeAppSecundario> Share</NomeAppSecundario>
        </MargemNomeApp>
        <RetanguloLogin>
          <TextoRetangulo>Email</TextoRetangulo>
          <CampoInput name="email" />
          <TextoRetangulo>Senha</TextoRetangulo>
          <CampoInput name="senha" type="password"></CampoInput>
          <BotaoEntrar type="submit" value="Entrar" />
          <BotaoAbrirConta to="/cadastro">Abrir Conta</BotaoAbrirConta>
        </RetanguloLogin>
      </ContainerLogin>
    </form>
  );
};
export default Login;
