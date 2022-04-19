import { Pagination } from "react-bootstrap";

const PaginateList = ({ currentPage, setCurrentPage, pageNumber }) => {

  let items = [];

  const changePage = (e) =>{
      const page = e.target.textContent - 1;
      setCurrentPage(page);
  }

  for (let number = 1; number <= pageNumber; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage + 1} >
    
        <button onClick={changePage}>{number}</button>
      </Pagination.Item>
    );
  }


  return (
    <div>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        {items}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default PaginateList;
