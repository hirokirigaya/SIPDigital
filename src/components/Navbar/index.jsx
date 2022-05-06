import React, { useState } from 'react'
import './styles.css'
import { IoMdLogOut as Logout } from 'react-icons/io'

import { AiOutlineMenu as Menu } from 'react-icons/ai'


function index() {

  const [open, setOpen] = useState()

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <aside className='container-aside'>
        <nav className='navbar'>
          <h1>LOGO</h1>
          <ul>
            <li><a href="#dashboard" className='dash'><img src="../../img/piechart.svg" alt="chart-img"/>Dashboard</a></li>
            <li><a href="#pedidos"><img src="../../img/pedidosicon.svg" alt="pedido-img" />Pedidos</a></li>
            <li><a href="#produtos"><img src="../../img/productsicon.svg" alt="produto-img" />Produtos</a></li>
            <li><a href="#cliente"><img src="../../img/clienteicon.svg" alt="clienteicon" />Cliente</a></li>
            <li><a href="#financeiro"><img src="../../img/financeiroicon.svg" alt="financeiro-img" />Financeiro</a></li>
            <li><a href="#usuarios"><img src="../../img/usericon.svg" alt="usuario-img" />Usuários</a></li>
          </ul>
        </nav>
        <button className='logout'> <Logout /> Logout</button>
      </aside>
      <aside className='aside-mobile'>
        <nav className='navbar-mobile'>
          <div className='menu'>
            <Menu onClick={toggleOpen}/>
          </div>
          <ul className={open === true ? 'navon' : 'navoff'}>
            <li><a href="#dashboard"><img src="../../img/piechart.svg" alt="chart-img"/>Dashboard</a></li>
            <li><a href="#pedidos"><img src="../../img/pedidosicon.svg" alt="pedido-img" />Pedidos</a></li>
            <li><a href="#produtos"><img src="../../img/productsicon.svg" alt="produto-img" />Produtos</a></li>
            <li><a href="#cliente"><img src="../../img/clienteicon.svg" alt="cliente-icon" />Cliente</a></li>
            <li><a href="#financeiro"><img src="../../img/financeiroicon.svg" alt="financeiro-img" />Financeiro</a></li>
            <li><a href="#usuarios"><img src="../../img/usericon.svg" alt="usuario-img" />Usuários</a></li>
          </ul>
        <button className={open === true ? 'logout' : 'logoutoff'}> <Logout /> Logout</button>
        </nav>
      </aside>
    </>
  )
}

export default index