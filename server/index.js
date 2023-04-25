import express from 'express';
import mysql from 'mysql';

const app = express();

const database = mysql.createConnection({
  host: 'localHost',
  user: 'root',
  password: 'mysqlfrontend3',
  database: 'booksapp',
});

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello this is backend');
});

app.get('/books', (req, res) => {
  const q = 'SELECT * FROM books';
  database.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/books', (req, res) => {
  const q = 'INSERT INTO books(`title`,`desc`,`cover`,`author`) VALUES(?)';
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.author,
  ];

  database.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json('Book has been created');
  });
});

app.listen(8800, () => {
  console.log(`Connected to backend`);
});
