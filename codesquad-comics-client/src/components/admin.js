import React, { useState, useEffect } from 'react';
import Header from '../shared/header';
import Footer from '../shared/footer';
import booksData from '../data/books';

const Admin = () => {
  const [books, setBooks] = useState([]); 

  useEffect(() => {
    setBooks(booksData); 
  }, []); 

  return (
    <div>
     
      <main>
        <h1>ADMIN PAGE</h1>
        <button type="submit">ADD NEW COMIC</button>

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
                  <button type="submit" name="action" value="edit">EDIT</button>
                </td>
                <td>
                  <button type="submit" name="action" value="delete">DELETE</button>
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
