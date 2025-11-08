import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import ResultPage from "./ResultPage";

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage setFormData={setFormData} />} />
        <Route path="/result" element={<ResultPage data={formData} />} />
      </Routes>
    </Router>
  );
}

export default App;
