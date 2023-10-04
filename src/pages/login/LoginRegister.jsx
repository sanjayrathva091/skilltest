// src/components/LoginRegister.js
import React from "react";
import CustomForm from "../../components/commons/CustomForm";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
import * as Yup from "yup";

const formFields = [
  {
    type: "text",
    name: "firstName",
    label: "First Name",
    validation: Yup.string().required("First Name is required"),
  },
  {
    type: "text",
    name: "lastName",
    label: "Last Name",
    validation: Yup.string().required("Last Name is required"),
  },
  {
    type: "checkbox",
    name: "subscribeNewsletter",
    label: "Subscribe to Newsletter",
  },
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },
];

function onSubmit(values) {
  console.log("Form submitted with values:", values);
}

function LoginRegister() {
  return (
    <div className="container px-4 text-center">
      <div className="row gx-5">
        <div className="col">
          <h1>Login</h1>
          <CustomForm formFields={formFields} onSubmit={onSubmit} />
        </div>
        <div className="col">
          <h1>Register</h1>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Address 2
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">
                Zip
              </label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
