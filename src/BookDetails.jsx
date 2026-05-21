import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./styles.css";

function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://openlibrary.org/works/${id}.json`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container">
        <Link to="/">Back</Link>

        <h1>{book.title}</h1>

        <p>
            {typeof book.description === "string" ? book.description : book.description?.value || "No description available."}
        </p>

        {book.covers && (<img src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`} alt={book.title}/>)}
    </div>
  );
}

export default BookDetails;