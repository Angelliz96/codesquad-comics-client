import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/books");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/books/delete/${bookId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Book deleted successfully");

     
      setBooks(books.filter(book => book.id !== bookId));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div>
      <main>
        <h1>ADMIN PAGE</h1>
        <button type="button" onClick={() => navigate('/create')}>ADD NEW COMIC</button>
        <table>
          <thead>
            <tr>
              <th>COMIC TITLE</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>
                  <button type="button" onClick={() => navigate(`/update/${book.id}`)}>EDIT</button>
                </td>
                <td>
                  <button type="button" onClick={() => handleDelete(book.id)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Admin;
