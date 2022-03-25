import {
	ContainerCadastro,
	RetanguloCadastro,
	CampoInputCadastro,
	BotaoConfirmacaoCadastro,
	PaiLinhaInput,
	NomeCampo,
} from './styles';
import axios from 'axios';
const Cadastro = () => {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				(async () => {
					try {
						const resposta = await axios.post('http://localhost:3001/usuarios/cadastro', {
							nome: event.target.nome.value,
							telefone: event.target.telefone.value,
							email: event.target.email.value,
							dataNascimento: event.target.dataNascimento.value,
							senha: event.target.senha.value,
							repeticaoSenha: event.target.repeticaoSenha.value,
						});
						alert(`Usuário(a) ${resposta.data.nome} adicionado com sucesso!`);
						console.log(resposta.data);
					} catch (error) {
						alert(error.response.data);
					}
				})();
			}}
		>
			<ContainerCadastro>
				<RetanguloCadastro>
					<PaiLinhaInput>
						<NomeCampo>Nome completo</NomeCampo>
						<CampoInputCadastro name="nome" />
					</PaiLinhaInput>
					<PaiLinhaInput>
						<NomeCampo>Telefone</NomeCampo>
						<CampoInputCadastro name="telefone" />
					</PaiLinhaInput>
					<PaiLinhaInput>
						<NomeCampo>E-mail institucinal</NomeCampo>
						<CampoInputCadastro name="email" />
					</PaiLinhaInput>
					<PaiLinhaInput>
						<NomeCampo>Data de nascimento</NomeCampo>
						<CampoInputCadastro name="dataNascimento" />
					</PaiLinhaInput>
					<PaiLinhaInput>
						<NomeCampo>Senha</NomeCampo>
						<CampoInputCadastro type="password" name="senha" />
					</PaiLinhaInput>
					<PaiLinhaInput>
						<NomeCampo>Repita a senha</NomeCampo>
						<CampoInputCadastro type="password" name="repeticaoSenha" />
					</PaiLinhaInput>
					<BotaoConfirmacaoCadastro type="submit" value="Finalizar Cadastro" />
				</RetanguloCadastro>
			</ContainerCadastro>
		</form>
	);
};

export default Cadastro;
