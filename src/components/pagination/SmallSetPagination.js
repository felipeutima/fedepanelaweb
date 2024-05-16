import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function SmallSetPagination({ list_page, list, count }) {
  const [active, setActive] = useState(1);
  const [listingsPerPage,] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const visitPage = (page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
    setActive(page);
    list_page(page)
  }

  const previous_number = () => {
    window.scrollTo(0, 0);
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
      list_page(currentPage - 1)
    }
  };

  const next_number = () => {
    window.scrollTo(0, 0);
    if (currentPage !== Math.ceil(list.length / 3)) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
      list_page(currentPage + 1)
    }
  };

  let numbers = [];

  const getNumbers = () => {
    let itemsPerPage = listingsPerPage;
    let pageNumber = active - 4; // Empezar mostrando 4 números antes de la página activa
    pageNumber = Math.max(pageNumber, 1); // Asegurarse de que no sea menor que 1

    let endPage = Math.min(pageNumber + 9, Math.ceil(count / itemsPerPage)); // Mostrar hasta 10 números o el final de las páginas

    for (let i = pageNumber; i <= endPage; i++) {
      let content = null;

      if (active === i) {
        content = (
          <div key={i} className={`hidden md:-mt-px md:flex`}>
            <div>
              <Pagination.Item> {i}</Pagination.Item>
            </div>
          </div>
        );
      } else {
        content = (
          <div key={i} onClick={() => {
            visitPage(i)
          }} className={`hidden md:-mt-px md:flex`}>
            <div>
              <Pagination.Item>{i}</Pagination.Item>
            </div>
          </div>
        );
      }

      numbers.push(content);
    }

    return numbers;
  }


  return (
    <nav className="border-t border-gray-200 px-4 d-flex justify-content-between align-items-center mt-4">
      {
        currentPage !== 1 ?
          <div>
            <button
              onClick={() => { previous_number() }}
              className=""
            >
              <ArrowLeftCircleFill color='white' className="mr-3 text-muted" aria-hidden="true" />
              Anterior
            </button>
          </div>
          :
          <div></div>
      }
      <Pagination size=''>
        {getNumbers()}
      </Pagination>
      {
        numbers.length === 0 || currentPage === numbers.length ?
          <div></div>
          :
          <div>
            <button
              onClick={() => { next_number() }}
              className=""
            >
              Siguiente
              <ArrowRightCircleFill color='white' className="ml-3 text-muted" aria-hidden="true" />
            </button>
          </div>

      }
    </nav>

  )
}

export default SmallSetPagination