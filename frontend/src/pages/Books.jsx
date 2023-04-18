import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";

import "../styles/book.css";
import BookCard from "../shared/BookCard";
import SearchBar from "../shared/SearchBar";
import { Container, Row, Col } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Books = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: books,
    loading,
    error,
  } = useFetch(`${BASE_URL}/books?page=${page}`);
  const { data: bookCount } = useFetch(`${BASE_URL}/books/search/getBookCount`);

  useEffect(() => {
    const pages = Math.ceil(bookCount / 8); //backend
    setPageCount(pages);
  }, [page, bookCount]);

  return (
    <>
      <CommonSection title={"All Books"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}

          {!loading && !error && (
            <Row>
              {books?.map((book) => (
                <Col lg="3" className="mb-4" key={book._id}>
                  <BookCard book={book} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center empty-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};
export default Books;
