import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from "react-router-dom";
import About from './Pages/About';
import { RouterProvider } from 'react-router-dom';
import ErrorComponent from './Components/ErrorComponent';
import Contact from './Pages/Contact';
import Body from './Components/Body';
import RestaurentMenu from './Pages/RestaurantMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorComponent/>,
    children:[
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/restaurant/menu/:resId",
        element: <RestaurentMenu/>
      }
    ]
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
