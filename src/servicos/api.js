import axios from "axios";

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
