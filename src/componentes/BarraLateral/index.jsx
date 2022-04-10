import React from 'react';
import { ContainerBarraLateral, ContainerInterno, Categoria } from './styles';

export const BarraLateral = ({}) => {
  return (
    <ContainerBarraLateral>
      <ContainerInterno>
        <Categoria onClick={() => alert('ainda em construção')}>TCCs</Categoria>
        <Categoria onClick={() => alert('ainda em construção')}>Artigos</Categoria>
        <Categoria onClick={() => alert('ainda em construção')}>Palestras</Categoria>
        <Categoria onClick={() => alert('ainda em construção')}>Monitorias</Categoria>
        <Categoria onClick={() => alert('ainda em construção')}>Competições</Categoria>
        <Categoria onClick={() => alert('ainda em construção')}>Oportunidades</Categoria>
        <Categoria onClick={() => alert('ainda em construção')}>Portas Abertas</Categoria>
      </ContainerInterno>
    </ContainerBarraLateral>
  );
};
