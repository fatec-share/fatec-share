import React from 'react'
import { ContainerBarraDeNavegacao, BarraNavegacaoTitulo } from './styles';

export const BarraDeNavegacao = () => {
  return (
    <ContainerBarraDeNavegacao>
      <h2><a href="/home">Fatec Share</a></h2>
      <div>
        <input type="text" placeholder="Procurar..." name="procurar" />
      </div>
      <button onClick={() => alert("ainda em contrucao")}>+</button>
    </ContainerBarraDeNavegacao>
  )
}
