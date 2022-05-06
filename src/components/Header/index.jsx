import React from 'react'
import './styles.css'

import { BiSearch } from 'react-icons/bi'

function index() {
  return (
    <header className='header'>
      <section className='searchBar'>
      <div className='search'>
        <BiSearch /> <input type="text" name="search" id="search" placeholder='Pesquisar'/>
      </div>
      <div className='userData'>
        <p className='notificationAlert'>9</p>
        <img src="../../img/notification.svg" alt="notification" className='notification'/>
        <img src="../../img/logouser.svg" alt="avatar" className='avatar'/>
      </div>
      </section>
    </header>
  )
}

export default index