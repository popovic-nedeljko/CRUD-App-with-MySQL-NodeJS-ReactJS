import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8800/books');
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div>
      <h1>Your BOOKS</h1>
      <div className='books'>
        {books.map((book) => (
          <div className='book' key={book.id}>
            {book.cover && <img src={book.cover} alt='cover' />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <h3>{book.author}</h3>
          </div>
        ))}
      </div>
      <button>
        <Link to='/add'>Add new book</Link>
      </button>
    </div>
  );
};

export default Books;
