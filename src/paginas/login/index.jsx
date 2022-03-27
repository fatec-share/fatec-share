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
} from './styles';

import axios from 'axios';
import sha512 from 'js-sha512';

const Login = () => {
	const funcaoAssincrona = async (evento) => {
		try {
			const stringAleatoria = await axios.post('http://localhost:3001/usuarios/hash2', {
				email: evento.target.email.value,
			});

			const primeiraHash = sha512(evento.target.senha.value + 'FatecShare');
			const segundaHash = sha512(primeiraHash + stringAleatoria.data);

			const resposta = await axios.post('http://localhost:3001/usuarios/login', {
				email: evento.target.email.value,
				segundaHash: segundaHash,
			});
			alert(`Usuário(a) ${resposta.data.nome} logado(a) com sucesso!`);
		} catch (error) {
			alert('Usuário ou senha incorretos!');
		}
	};
	return (
		<form
			onSubmit={(evento) => {
				evento.preventDefault();
				funcaoAssincrona(evento);
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
