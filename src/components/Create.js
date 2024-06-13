import React from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const body = {
      title: formData.get("title"),
      author: formData.get("author"),
      publisher: formData.get("publisher"),
      genre: formData.get("genre"),
      numberpage: formData.get("numberpage"),
      rating: formData.get("rating"),
      synopsis: formData.get("synopsis"),
    };

    try {
      const response = await fetch("http://localhost:8080/api/books/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Book created successfully", result);
      navigate("/admin");
    } catch (error) {
      console.error("Create error:", error);
    }
  };

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            required
          />
          <br />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            required
          />
          <br />
          <label htmlFor="publisher">Publisher:</label>
          <select id="publisher" name="publisher" required>
            <option value="BOOM! Box">BOOM! Box</option>
            <option value="DC Comics">DC Comics</option>
            <option value="Icon Books" selected>Icon Books</option>
            <option value="Image Comics">Image Comics</option>
            <option value="Marvel">Marvel</option>
            <option value="Simon & Schuster">Simon & Schuster</option>
            <option value="Top Shelf Productions">Top Shelf Productions</option>
            <option value="VIZ Media LLC" disabled>VIZ Media LLC</option>
          </select>
          <br />
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="Genre"
            required
          />
          <br />
          <label htmlFor="numberpage">Number of Page:</label>
          <input
            type="number"
            id="numberpage"
            name="numberpage"
            placeholder="Number of pages"
            required
          />
          <br />
          <label htmlFor="rating">Rating:</label>
          <input
            type="text"
            id="rating"
            name="rating"
            required
          />
          <br />
          <label htmlFor="synopsis">Synopsis:</label>
          <textarea
            id="synopsis"
            name="synopsis"
            placeholder="Synopsis"
            required
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Create;
