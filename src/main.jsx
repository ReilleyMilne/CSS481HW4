import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles.css'

import App from './App.jsx'
import BookDetails from "./BookDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/book/:id" element={<BookDetails />} />
    </Routes>
  </BrowserRouter>
);