import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';

import Update from './pages/Update';
import Books from './pages/Books.jsx';
import Add from './pages/Add.jsx';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
