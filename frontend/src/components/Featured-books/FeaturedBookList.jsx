import React from "react";
import BookCard from "../../shared/BookCard";

import { Col } from "reactstrap";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";
const FeaturedBookList = () => {
  const {
    data: featuredBooks,
    loading,
    error,
  } = useFetch(`${BASE_URL}/books/search/getFeaturedBooks`);
  console.log(featuredBooks);

  return (
    <>
      {loading && <h4>Loading.........</h4>}

      {error && <h4>{error}</h4>}

      {!loading &&
        !error &&
        featuredBooks?.map((book) => (
          <Col lg="3" className="mb-4" key={book._id}>
            <BookCard book={book} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedBookList;
