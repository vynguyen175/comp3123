import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ResultPage({ data }) {
  const navigate = useNavigate();

  if (!data) {
    return (
      <div className="container mt-5 text-center">
        <h4>No data found. Please fill out the form first.</h4>
        <button className="btn btn-outline-success mt-3" onClick={() => navigate("/")}>
          Go to Form
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="border border-success p-4 rounded">
        <h2 className="text-center text-success mb-4 fw-bold">Submitted Information</h2>
        <p><strong className="text-success">Email:</strong> {data.email}</p>
        <p><strong className="text-success">Full Name:</strong> {data.name}</p>
        <p><strong className="text-success">Address:</strong> {data.address}</p>
        <p><strong className="text-success">City:</strong> {data.city}</p>
        <p><strong className="text-success">Province:</strong> {data.province}</p>
        <p><strong className="text-success">Postal Code:</strong> {data.postalCode}</p>
        <div className="text-center mt-4">
          <button className="btn btn-outline-success" onClick={() => navigate("/")}>
            Back to Form
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
