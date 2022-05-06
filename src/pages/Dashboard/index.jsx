import React from 'react'
import Cards from '../../components/Cards'
import Grafico from '../../components/Grafico'
import UltimosPedidos from '../../components/Pedidos/UltimosPedidos';

function index() {
  return (
    <main>
      <Cards/>
      <Grafico/>
      <UltimosPedidos/>
    </main>
  )
}

export default index;