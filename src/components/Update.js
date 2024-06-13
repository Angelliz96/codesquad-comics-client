import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/api/books/${bookId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBook(data);
      })
      .catch(error => console.error('Error fetching book:', error));
  }, [bookId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Update method ran');
    
    const body = {
      title: e.target.title.value,
      author: e.target.author.value,
      publisher: e.target.publisher.value,
      genre: e.target.genre.value,
      pages: e.target.pages.value,
      rating: e.target.rating.value,
      synopsis: e.target.synopsis.value
    };

    fetch(`http://localhost:8080/api/books/update/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Book updated:', data);
      setBook(data);
      navigate('/admin');
    })
    .catch(error => console.error('Error updating book:', error));
  };

  return (
    <div>
      <main>
        <h2>Update Page</h2>
        <form onSubmit={handleUpdate}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            defaultValue={book.title || ''}
            required
          />
          <br />
          <br />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter author"
            defaultValue={book.author || ''}
            required
          />
          <br />
          <br />
          <label htmlFor="publisher">Publisher:</label>
          <select id="publisher" name="publisher" defaultValue={book.publisher || ''} required>
            <option value="BOOM! Box">BOOM! Box</option>
            <option value="DC Comics">DC Comics</option>
            <option value="Icon Books">Icon Books</option>
            <option value="Image Comics">Image Comics</option>
            <option value="Marvel">Marvel</option>
            <option value="Simon & Schuster">Simon & Schuster</option>
            <option value="Top Shelf Productions">Top Shelf Productions</option>
            <option value="VIZ Media LLC">VIZ Media LLC</option>
          </select>
          <br />
          <br />
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="Enter genre"
            defaultValue={book.genre || ''}
            required
          />
          <br />
          <br />
          <label htmlFor="pages">Pages:</label>
          <input
            type="number"
            id="pages"
            name="pages"
            placeholder="Enter number of pages"
            defaultValue={book.pages || ''}
            required
          />
          <br />
          <br />
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            placeholder="Enter rating"
            defaultValue={book.rating || ''}
            required
          />
          <br />
          <br />
          <label htmlFor="synopsis">Synopsis:</label>
          <textarea
            id="synopsis"
            name="synopsis"
            placeholder="Enter synopsis"
            defaultValue={book.synopsis || ''}
            required
          ></textarea>
          <br />
          <br />
          <button type="submit">Submit</button>
          <br />
        </form>
      </main>
    </div>
  );
};

export default Update;
