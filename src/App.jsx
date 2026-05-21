import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function App() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${search}`
    );

    const data = await response.json();
    setBooks(data.docs);
  };

  const handleSubmit = (entry) => {
    entry.preventDefault();
    fetchBooks();
  };

  return (
    <div className="container">
      <h1>Book Search</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={(entry) => setSearch(entry.target.value)} placeholder="Search books..."/>

        <button type="submit">Search</button>
      </form>

      <div className="books">
        {books.map((book) => (
          <Link key={book.key} to={`/book/${book.key.replace("/works/", "")}`} className="book">
            <h3>{book.title}</h3>

            <p>
              {book.author_name ? book.author_name[0] : "Unknown Author"}
            </p>

            <p>{book.first_publish_year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;