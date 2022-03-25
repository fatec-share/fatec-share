import styled from "styled-components";

export const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RetanguloCadastro = styled.div`
  border-radius: 10px;
  border: solid 0.5px #b5b5b5;
  margin-top: 80px;
  margin-left: 500px;
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
`;
export const CampoInputCadastro = styled.input`
  height: 30px;
  width: 180px;
  margin-top: 30px;
  margin-left: 10px;
  border: solid 0.5px #b5b5b5;
  border-radius: 10px;
`;

export const BotaoConfirmacaoCadastro = styled.input`
  padding: 10px;
  width: 200px;
  margin-top: 35px;
  margin-left: 100px;
  display: inline-block;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #00c462;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
`;

export const PaiLinhaInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
`;

export const NomeCampo = styled.div`
  margin-left: 30px;
  margin-top: 35px;
  color: #b5b5b5;
`;
