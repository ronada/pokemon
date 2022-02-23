import ReactPaginate from "react-paginate";
import "./Pagination.scss";

interface propsTypes {
  pageCount: number;
  forcePage: number;
  onPageChange: (event: {selected: number}) => void
}

export default function Pagination({pageCount, forcePage, onPageChange}: propsTypes):JSX.Element{
  const handlePageClick = (e: {selected: number}): void => {
    onPageChange(e)
  }

  return (
    <div className="pagination-wrapper">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={forcePage}
        previousLabel="< Previous"
      />
    </div>
  );
};