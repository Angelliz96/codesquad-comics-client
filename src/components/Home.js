import React, { useState, useEffect } from "react";
// import { BrowserRouter } from "react-router-dom";


function Home() {
  const [allBooks, setAllBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/books", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.statusCode === 200) {
          setAllBooks(result.data);
        } else {
          throw new Error(result.error.message);
        }
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  console.log("allBooks: >>", allBooks);
  console.log("errorMessage : >>", errorMessage);

  return (
    <div>
      <main>
        <h1>CODESQUAD COMICS</h1>
        <p>
          CodeSquad Comics is a collection of graphic novels read by Angely
          Lizcano. The site is intended to display comic book covers along with
          information about each book, including the author, a rating, and other
          details about the graphic novel. Browse through the complete
          collection below. Click on the cover image or the Details link to see
          even more information about each graphic novel including the
          publisher, genre, number of pages, and a brief synopsis. The About
          page includes meta information about this collection. Login is only
          available to the site administrator at this time.
        </p>
        <section>
          <h2>COMPLETE COMIC COLLECTION</h2>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            allBooks && allBooks.map((book) => (
              <div className="individual-comics" key={book.id}>
                <a href="#">
                  <img
                    src={`./images/${book.image}`}
                    alt={`${book.title}`}
                    width="200px"
                  />
                </a>
                <p>
                  <em>{book.title}</em>
                  <br />
                  by {book.author}
                  <br />
                  {book.rating} stars
                </p>
                `<a href="#">`Details</a>
                <br />
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
