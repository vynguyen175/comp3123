import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function FormPage({ setFormData }) {
  const [data, setData] = useState({
    email: "",
    name: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    agree: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.agree) {
      alert("Please agree to the Terms & Condition?");
      return;
    }
    setFormData(data);
    navigate("/result"); // go to next page
  };

  return (
    <div className="container mt-4">
      <form className="border border-success p-4 rounded" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4 fw-bold">Data Entry Form</h2>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full Name"
              value={data.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="1234 Main St"
            value={data.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address 2</label>
          <input
            type="text"
            name="address2"
            className="form-control"
            placeholder="Apartment, studio, or floor"
            value={data.address2}
            onChange={handleChange}
          />
        </div>

        <div className="row mb-3">
          <div className="col-md-5">
            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={data.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Province</label>
            <select
              name="province"
              className="form-select"
              value={data.province}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              <option>Ontario</option>
              <option>Quebec</option>
              <option>British Columbia</option>
              <option>Alberta</option>
              <option>Manitoba</option>
              <option>Saskatchewan</option>
              <option>Nova Scotia</option>
              <option>New Brunswick</option>
              <option>Newfoundland and Labrador</option>
              <option>Prince Edward Island</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              className="form-control"
              value={data.postalCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="agree"
            checked={data.agree}
            onChange={handleChange}
          />
          <label className="form-check-label">Agree Terms & Condition?</label>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success px-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
