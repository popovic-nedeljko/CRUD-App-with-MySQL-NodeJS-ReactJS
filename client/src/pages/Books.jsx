import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8800/books/' + id);
      window.location.reload(); // in real app redux
    } catch (err) {
      console.log(err);
    }
  };

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
            <button className='delete' onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className='update'>
              <Link className='link' to={`/update/${book.id}`}>
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
      <button className='new-book'>
        <Link className='link new-book' to='/add'>
          Add new book
        </Link>
      </button>
    </div>
  );
};

export default Books;
