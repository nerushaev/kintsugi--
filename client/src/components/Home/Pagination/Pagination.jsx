import {
  PaginationWrapper,
  PaginationItem
} from './Pagination.styled';

export default function Pagination({ totalPages, currentPage, handlePagePrev }) {

  function makeArray(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
  }

  const paginationAmount = makeArray(totalPages);
  
  return (
  <PaginationWrapper>
      {paginationAmount.map((item) => {
        console.log(currentPage);
        return <PaginationItem onClick={handlePagePrev} key={item} active={item == currentPage}>{item}</PaginationItem>
      })}
  </PaginationWrapper>
  )
}
