import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import s from "./CardList.module.css";

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(3);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_limit=15"
      );
      setProducts(res.data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const lastCountryIndex = currentPage * productPerPage;
  const firstCountryIndex = lastCountryIndex - productPerPage;
  const currentCountry = products.slice(firstCountryIndex, lastCountryIndex);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = (pageNumbers) => {
    if (pageNumbers.length === currentPage) {
      return null;
    }
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage === 1) {
      return 1;
    }
    setCurrentPage((prev) => prev - 1);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={s.container}>
      <div className={s.cardList}>
        {currentCountry.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>

      <div className={s.paginationList}>
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
          pagination={pagination}
          productPerPage={productPerPage}
          totalProducts={products.length}
        />
      </div>
    </div>
  );
};

export default CardList;
