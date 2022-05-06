import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import PedidosData from './PedidosData';

import './Paginate.css'
import './SliderPedidos.css'

const items = PedidosData;


function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((pedido) => (
          <section className='dataPedidos' key={pedido.id}>
            <div className='id'>
              <p>{pedido.id}</p>
            </div>
            <div className='horario'>
              <p>{pedido.data} - {pedido.horario}</p>
            </div>
            <div className='ver'>
              <p>Ver (Quantidade)</p>
            </div>
            <div className='total'>
              <p>R${pedido.total},00</p>
            </div>
            <div className='comprador'>
              <p>{pedido.comprador}</p>
            </div>
            <div className='status'>
              <p>{pedido.status}</p>
            </div>
            <div className='btnRecomendada'>
              <button>{pedido.statusbtn}</button>
            </div>
          </section>
        ))}
    </>
  );
}

function Paginate({ itemsPerPage }) {

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  // const homePageActive = (data) => {
  //   console.log(data)
  // }

  return (
    <div className='containerPagination'>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className='pagination'
        activeClassName='activePageLink'
        previousClassName='prevBtn'
        nextClassName='nextBtn'
        // onPageActive = {homePageActive}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Paginate