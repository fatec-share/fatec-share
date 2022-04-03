import { CadastroContainer, CadastroCartao, CadastroCampoTexto } from './styles';
import { Botao } from '../../componentes/Botao';
import { useNavigate } from 'react-router-dom';
import { validaFormularioCadastro } from '../../servicos/api';

const Cadastro = () => {
  const navegar = useNavigate();

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        validaFormularioCadastro(evento, navegar);
      }}
    >
      <CadastroContainer>
        <CadastroCartao>
          <h1>CADASTRO</h1>
          <CadastroCampoTexto>
            <label htmlFor="nome">Nome completo</label>
            <input name="nome" placeholder="Klebão da Massa" autoComplete="off" />
          </CadastroCampoTexto>
          <CadastroCampoTexto>
            <label htmlFor="email">E-mail institucional</label>
            <input name="email" placeholder="exemplo@fatec.sp.gov.br" autoComplete="off" />
          </CadastroCampoTexto>
          <CadastroCampoTexto>
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="Mínimo 6 caracteres" autoComplete="off" />
          </CadastroCampoTexto>
          <CadastroCampoTexto>
            <label htmlFor="repeticaoSenha">Repita a senha</label>
            <input type="password" name="repeticaoSenha" placeholder="Mínimo 6 caracteres" autoComplete="off" />
          </CadastroCampoTexto>
          <Botao type="submit" texto="Confirmar" primario />
        </CadastroCartao>
      </CadastroContainer>
    </form>
  );
};

export default Cadastro;
