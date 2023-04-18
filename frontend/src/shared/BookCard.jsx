import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "./book-card.css";

const bookCard = ({ book }) => {
  const { _id, title, author, photo, publish_date, featured, reviews } = book;

  return (
    <div className="book__card">
      <Card>
        <div className="book__img">
          <img src={photo} alt="book-img" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className=" card__top d-flex align-items-center justify-content-between">
            <span className="book__location d-flex align-items-center gap-1">
              <i class="ri-pencil-line"></i>
              {author}
            </span>
          </div>
          <h5 className="book__title">
            <Link to={`/books/${_id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>{publish_date}</h5>

            <button className="btn booking__btn">
              <Link to={`/books/${_id}`}>Borrow </Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default bookCard;
