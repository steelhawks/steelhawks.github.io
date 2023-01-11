import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { pages } from './routes/routes';
import Navigation from './components/Navigation';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navigation routes={pages} />
    <RouterProvider router={createBrowserRouter(pages)} />
    <Footer />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
