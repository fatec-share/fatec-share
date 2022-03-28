import axios from "axios";
import sha512 from 'js-sha512';

// PAGINA LOGIN
export const validaLogin = async (evento) => {
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
}

// PAGINA CADASTRO
export const validaFormularioCadastro = async (evento) => {
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
      email: evento.target.email.value,
      hashSenha: sha512(evento.target.senha.value + 'FatecShare'),
    });
    alert(`Usuário(a) ${evento.target.nome.value} adicionado(a) com sucesso!`);
    navegar('/');
  } catch (error) {
    alert(error.response.data);
  }
};
