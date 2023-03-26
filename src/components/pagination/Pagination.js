import React from "react";
import Button from "../button/Button";

import s from "./Pagination.module.css";
const Pagination = ({
  productPerPage,
  totalProducts,
  pagination,
  currentPage,
  prevPage,
  nextPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Button prevPage={prevPage} type="block" btnColor="black">
        Назад
      </Button>
      <ul className={s.pagination}>
        {pageNumbers.map((number) => (
          <li
            className={`${s.pageItem} ${
              currentPage === number ? s.pageItemVisible : ""
            }`}
            key={number}
            onClick={() => pagination(number)}
          >
            <a href="!#" className={`${s.pageLink}`}>
              {number}
            </a>
          </li>
        ))}
      </ul>
      <Button
        nextPage={nextPage}
        type="outline"
        btnColor="blue"
        pageNumbers={pageNumbers}
      >
        Вперед
      </Button>
      {/* Ниже пример использования других стилей кнопки */}
      {/* <Button btnColor="yellow" type="rounded" labelColor="black" />
      <Button btnColor="red" disabled /> */}
    </>
  );
};

export default Pagination;
