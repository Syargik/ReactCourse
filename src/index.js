import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Biography from './routers/Biography';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='biography' element={<Biography />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
