import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import reportWebVitals from './reportWebVitals';
import { faCircleLeft, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Movie from './Movie';

library.add( faMagnifyingGlass, faStar, faCircleLeft )

let router=createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/movie',
    element: <Movie/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
