import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/book-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";

import Borrow from "../components/borrow/borrow";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

// import calculateAvgRating from "../utils/avgRating";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  // fetch data from db

  const { data: book, loading, error } = useFetch(`${BASE_URL}/books/${id}`);

  const { photo, title, desc, author } = book;

  //later will call api
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [book]);
  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}

          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="book__content">
                  <img src={photo} alt="" />
                  <div className="book__info">
                    <h2>{title} </h2>
                    <div className="d-flex align-items-center gap-5"></div>
                    <div className="book__extra-details">
                      <span>
                        <i class="ri-user-fill"></i> {author}
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Borrow book={book} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default BookDetails;
