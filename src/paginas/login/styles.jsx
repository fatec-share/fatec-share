import styled from "styled-components";


export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #201b2c;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LoginEsquerda = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3vw;
    color: #77ffc0;
  }

  img {
    width: 35vw;
  }

  @media screen and (max-width: 600px){
    width:100%;
    height: auto;

    h1 {
      display: none;
    }

    img {
      width: 35vh;
      margin-bottom: 10px;
    }
  }
`;

export const LoginDireita = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px){
    width:100%;
    height: 100%;
  }
`;

export const LoginCartao = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  background: #2f2841;
  border-radius: 20px;
  box-shadow: 0px 20px 40px #00000056;

  h1 {
    color: #00ff88;
    font-weight: 800;
    margin: 0;
  }

  @media (pointer: coarse) {
    width: auto;
    height: auto;
  }
`;

export const LoginCampoTexto = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0px;

  input {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: #514869;
    color: #f0ffffde;
    font-size: 12pt;
    box-shadow: 0px 10px 40px #00000056;
    outline: none;
    box-sizing: border-box;
  }

  input::placeholder {
    color: #f0ffff94;
  }

  label {
    color: #f0ffffde;
    margin-bottom: 10px;
  }
`;


