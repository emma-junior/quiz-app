import React, { useState } from 'react'
import FirstPage from './firstPage'
import Result from './result';
import App from './App'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Content() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/quiz" element={<App />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Content