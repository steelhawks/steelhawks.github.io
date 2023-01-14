import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { pages } from './routes/routes';
import Navigation from './components/Navigation';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navigation routes={pages} />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ transition: { duration: 0.5 }, opacity: 1 }}
    >
      <RouterProvider router={createBrowserRouter(pages)} />
    </motion.div>
    <Footer />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
