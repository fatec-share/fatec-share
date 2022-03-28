import styled from "styled-components";

export const CadastroContainer = styled.div`
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

export const CadastroCartao = styled.div`
  /* position: relative; */
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  background: #2f2841;
  border-radius: 20px;
  box-shadow: 0px 20px 40px #00000056;


  h1 {
    padding-top: 10px;
    color: #00ff88;
    font-weight: 800;
    margin: 0;
    letter-spacing: 3px;
  }


  @media (pointer: coarse) {
    width: auto;
    height: auto;
  }
`;

export const CadastroCampoTexto = styled.div`
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
