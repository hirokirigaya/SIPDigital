import React from 'react'

import './styles.css'


function index() {
  return (
    <section className='cards'>
      <div className='card'>
        <img src="../../../img/unidade.svg" alt="unidade-img" />
        <div className='details'>
          <h3>Unidades Registradas</h3>
          <span>1</span>
        </div>
      </div>
      <div className='card'>
        <img src="../../../img/novosclientes.svg" alt="cliente-img" />
        <div className='details'>
          <h3>Novos Clientes</h3>
          <span>104</span>
        </div>
      </div>
      <div className='card'>
        <img src="../../../img/vendasrealizadas.svg" alt="vendas-img" />
        <div className='details'>
          <h3>Vendas Realizadas</h3>
          <span>7270</span>
        </div>
      </div>
      <div className='card'>
        <img src="../../../img/lucro.svg" alt="vendas-img" />
        <div className='details'>
          <h3>Lucro Liquido(Geral)</h3>
          <span>R$ 427.300,50</span>
        </div>
      </div>

    </section>
  )
}

export default index;