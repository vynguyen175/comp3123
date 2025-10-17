import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    name: "Vy Nguyen",
    id: "101488823",
    college: "George Brown College, Toronto",
    course: "Fullstack Development - I",
    lab: "React JS Programming Week09 Lab exercise"
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to {student.course}</h1>
        <h3>{student.lab}</h3>
        <p>Your Student ID</p>
        <h4>{student.id}</h4>
        <p>Your Name</p>
        <h4>{student.name}</h4>
        <p>{student.college}</p>
      </header>
    </div>
  );
}

export default App;
