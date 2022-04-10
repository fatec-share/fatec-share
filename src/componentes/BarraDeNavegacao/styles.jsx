import styled from 'styled-components';

export const ContainerBarraDeNavegacao = styled.div`
  background-color: #201b2c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 15vh;

  h2,
  li,
  a,
  button {
    font-weight: 500;
    color: #edf0f1;
    text-decoration: none;
    cursor: pointer;
    color: #00ff88;
    text-transform: uppercase;
    font-weight: 800;
    margin-left: 20px;
    margin-right: 20px;
  }

  h2 {
    font-size: 20px;
  }
  li {
    display: inline-block;
    padding: 0px 20px;
  }

  li:hover {
    opacity: 0.6;
    transition: 0.3s;
  }

  button {
    justify-content: flex;
    align-items: center;
    text-align: center;
    padding: 4px 12px;
    padding-bottom: 8px;
    background-color: #00ff88;
    border: none;
    border-radius: 3px;
    color: #2b134b;
    font-weight: 800;
    font-size: 20px;
  }

  button:hover {
    opacity: 0.6;
    transition: 0.3s;
  }

  div {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin: 10px px;
    flex: 1;

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
  }
`;
