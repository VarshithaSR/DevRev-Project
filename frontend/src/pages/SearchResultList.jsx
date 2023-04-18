import React, { useState } from "react";
import CommonSection from "./../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import BookCard from "../shared/BookCard";

const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  return (
    <>
      <CommonSection title={"Book Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No book found</h4>
            ) : (
              data?.map((book) => (
                <Col lg="3" className="mb-4" key={book._id}>
                  <BookCard book={book} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResultList;
