import React, { useState, useEffect } from "react";
import Header from "../shared/header";
import Footer from "../shared/footer";
import booksData from "../data/books";

const Index = () => {
  const [books, setBooks] = useState([]); 

  useEffect(() => {
    setBooks(booksData); 
  }, []); 

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
          {books.map((book) => (
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
              <a href="#">Details</a>
              <br />
            </div>
          ))}
        </section>
      </main>
     
    </div>
  );
};

export default Index;
