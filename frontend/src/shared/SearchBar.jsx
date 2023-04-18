import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const titleRef = useRef("");
  const authorRef = useRef("");
  const pub_dateRef = useRef("");
  const navigate = useNavigate();

  const searchHandler = async () => {
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const pub_date = pub_dateRef.current.value;

    if (title === " " || author === " " || pub_date === " ") {
      return alert("All feilds are required");
    }

    const res = await fetch(
      `${BASE_URL}/books/search/getBookBySearch?title=${title}&author=${author}&pub_date=${pub_date}`
    );

    if (!res.ok) alert("Somtehing went wrong ");

    const result = await res.json();

    navigate(
      `/books/search?title=${title}&author=${author}&pub_date=${pub_date}`,
      { state: result.data }
    );
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-2-line"></i>
            </span>
            <div>
              <h6>Title</h6>
              <input type="text" placeholder="Harry Potter" ref={titleRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Author</h6>
              <input type="text" placeholder="J.K.Roweling" ref={authorRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>Publish Date</h6>
              <input type="text" placeholder="dd/mm/yyyy" ref={pub_dateRef} />
            </div>
          </FormGroup>

          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
