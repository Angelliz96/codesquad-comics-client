import React from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
const Create = () => {
  return (
    <div>
      <Header />
      <main>
        <form action="#" method="post">
          {" "}
          {/* FORMS FOR A NEW COMIC */}
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
          />
          <br />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
          />{" "}
          <br />
          <label htmlFor="publisher">Publisher:</label>
          <select id="publisher" name="publisher">
            <option value="BOOM! Box">BOOM! Box</option>
            <option value="DC Comics">DC Comics</option>
            <option value="Icon Books" selected>
              Icon Books
            </option>
            <option value="Image Comics">Image Comics</option>
            <option value="Marvel">Marvel</option>
            <option value="Simon & Schuster">Simon & Schuster</option>
            <option value="Top Shelf Productions">Top Shelf Productions</option>
            <option value="VIZ Media LLC" disabled>
              VIZ Media LLC
            </option>
          </select>{" "}
          <br />
          <label htmlFor="genre">Genre:</label>
          <input type="text" id="genre" name="genre" placeholder="Genre" />
          <br />
          <label htmlFor="numberpage">Number of Page:</label>
          <input
            type="number"
            id="numberpage"
            name="numberpage"
            placeholder="Number of pages"
          />{" "}
          <br />
          <label htmlFor="rating">Rating:</label>
          <input type="text" id="rating" name="rating" /> <br />
          <label htmlFor="synopsis">Synopsis:</label>
          <textarea
            id="synopsis"
            name="synopsis"
            placeholder="Synopsis"
          ></textarea>{" "}
          <br />
          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Create;
