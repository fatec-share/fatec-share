import React from 'react';
import { BarraDeNavegacao } from '../../componentes/BarraDeNavegacao';
import { BarraLateral } from '../../componentes/BarraLateral';
import BasicGrid from '../../componentes/Grid';
import { ContainerHorizontal, ContainerVertical } from './styles';

export const Home = () => {
  return (
    <ContainerVertical>
      <BarraDeNavegacao />
      <ContainerHorizontal>
        <BarraLateral />
        <BasicGrid />
      </ContainerHorizontal>
    </ContainerVertical>
  );
};