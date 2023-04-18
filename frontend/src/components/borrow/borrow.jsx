import React, { useState } from "react";
import "./borrow.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Borrow = ({ book }) => {
  const { price } = book;

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "example@gmail.com",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  //send data to server

  const handleClick = (e) => {
    e.preventDefault();
    console.log(credentials);
    navigate("/thank-you");
  };
  return (
    <div className="borrow">
      <div className="borrow__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per day</span>
        </h3>
      </div>
      {/* borrow FORM START */}
      <div className="borrow__form">
        <h5>Information</h5>
        <Form className="borrow__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className=" d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="Id"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      {/* borrow FORM END */}

      {/* BUTTON */}
      <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
        Borrow
      </Button>
    </div>
  );
};
export default Borrow;
