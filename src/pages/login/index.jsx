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
const Login = () => {
  return (
    <ContainerLogin>
      <MargemNomeApp>
        <NomeAppPrincipal>Fatec</NomeAppPrincipal>
        <NomeAppSecundario> Share</NomeAppSecundario>
      </MargemNomeApp>
      <RetanguloLogin>
        <TextoRetangulo>Email</TextoRetangulo>
        <CampoInput></CampoInput>
        <TextoRetangulo>Senha</TextoRetangulo>
        <CampoInput></CampoInput>
        <BotaoEntrar>Entrar</BotaoEntrar>
        <BotaoAbrirConta>Abrir Conta</BotaoAbrirConta>
      </RetanguloLogin>
    </ContainerLogin>
  );
};
export default Login;
