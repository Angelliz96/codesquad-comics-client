import React from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
const Update = () => {
  return (
    <div>
      
      <main>
        <h2>Update Page</h2>

        <form action="#" method="post">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            value="title value stored in the database"
          />{" "}
          <br />
          <br />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter author"
            value="author value stored in the database"
          />{" "}
          <br />
          <br />
          <label htmlFor="publisher">Publisher:</label>
          <select id="publisher" name="publisher">
            <option value="BOOM! Box">BOOM! Box</option>
            <option value="DC Comics">DC Comics</option>
            <option value="Icon Books">Icon Books</option>
            <option value="Image Comics">Image Comics</option>
            <option value="Marvel">Marvel</option>
            <option value="Simon & Schuster">Simon & Schuster</option>
            <option value="Top Shelf Productions">Top Shelf Productions</option>
            <option value="VIZ Media LLC">VIZ Media LLC</option>
            <option value="publisher value stored in database" selected>
              publisher value stored in database
            </option>
          </select>{" "}
          <br />
          <br />
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="Enter genre"
            value="genre data stored in the database"
          />{" "}
          <br />
          <br />
          <label htmlFor="pages">Pages:</label>
          <input
            type="text"
            id="pages"
            name="pages"
            placeholder="Enter number of pages"
            value="255"
          />{" "}
          <br />
          <br />
          <label htmlFor="rating">Rating:</label>
          <input
            type="text"
            id="rating"
            name="rating"
            placeholder="Enter rating"
            value="5"
          />{" "}
          <br />
          <br />
          <label htmlFor="synopsis">Synopsis:</label>
          <textarea id="synopsis" name="synopsis" placeholder="Enter synopsis">
            synopsis value stored in the database
          </textarea>{" "}
          <br />
          <br />
          <button type="submit">Submit</button>
          <br />
        </form>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Update;
