import {
	ContainerCadastro,
	RetanguloCadastro,
	CampoInputCadastro,
	BotaoConfirmacaoCadastro,
	PaiLinhaInput,
	NomeCampo,
} from './styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import sha512 from 'js-sha512';

const Cadastro = () => {
	let navegar = useNavigate();
	const funcaoAssincrona = async (evento) => {
		try {
			if (evento.target.senha.value !== evento.target.repeticaoSenha.value) {
				alert('Senhas divergentes');
				return;
			}

			if (evento.target.senha.value.length < 6) {
				alert('Senha muito curta!');
				return;
			}

			const resposta = await axios.post('http://localhost:3001/usuarios/cadastro', {
				nome: evento.target.nome.value,
				telefone: evento.target.telefone.value,
				email: evento.target.email.value,
				dataNascimento: evento.target.dataNascimento.value,
				hashSenha: sha512(evento.target.senha.value + 'FatecShare'),
			});
			alert(`Usuário(a) ${evento.target.nome.value} adicionado(a) com sucesso!`);
			navegar('/');
		} catch (error) {
			alert(error.response.data);
		}
	};
	return (
		<form
			onSubmit={(evento) => {
				evento.preventDefault();
				funcaoAssincrona(evento);
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
						<CampoInputCadastro type="password" name="senha" placeholder="Mínimo 6 caracteres" />
					</PaiLinhaInput>
					<PaiLinhaInput>
						<NomeCampo>Repita a senha</NomeCampo>
						<CampoInputCadastro type="password" name="repeticaoSenha" placeholder="Mínimo 6 caracteres" />
					</PaiLinhaInput>
					<BotaoConfirmacaoCadastro type="submit" value="Finalizar Cadastro" />
				</RetanguloCadastro>
			</ContainerCadastro>
		</form>
	);
};

export default Cadastro;
