import React from 'react'
import './styles.css'

// import PedidosData from './PedidosData'

import 'swiper/css';
// import SliderPedidos from './SliderPedidos';
import Paginate from './Paginate';

function UltimosPedidos() {
  return (
    <div className='containerPedidos'>
    <section className='pedidos'>
      <h2>Ultimos pedidos realizados</h2>
      <div className='pedidosHeader'>
       <div className='pedidotitle'>
         <h4>Pedido</h4>
       </div>
       <div className='horatitle'>
         <h4>Data e Horario</h4>
       </div>
       <div className='produtostitle'>
         <h4>Produtos</h4>
       </div>
       <div className='totaltitle'>
         <h4>Total</h4>
       </div>
       <div className='compradortitle'>
         <h4>Comprador</h4>
       </div>
       <div className='statustitle'>
         <h4>Status dos Pedidos</h4>
       </div>
       <div className='acaotitle'>
         <h4>Ação recomendada</h4>
       </div>
      </div>
    </section>
    <Paginate itemsPerPage={5}/>
    {/* <SliderPedidos/> */}
    </div>
  )
}

export default UltimosPedidos;