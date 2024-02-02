import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Products from './Components/Products/Products';
import CheckOut from './Components/CheckOut/CheckOut';
import ShoppingBox from './Components/ShoppingBox/ShoppingBox';

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      {
        path: '', element: <React.Fragment>
          <Banner />
          <Products />
        </React.Fragment>
      },
      {
        path:'checkout',element:
        <React.Fragment>
        <CheckOut />
        <ShoppingBox />
      </React.Fragment>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);


