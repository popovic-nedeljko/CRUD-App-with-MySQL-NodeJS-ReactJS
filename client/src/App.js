import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Update from './pages/Update';
import Add from './pages/Add';
import Books from './pages/Books.jsx';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
