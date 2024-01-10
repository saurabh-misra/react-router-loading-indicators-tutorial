import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import SomePage, { loader as somePageLoader } from './SomePage';
import AnotherPage, { loader as anotherPageLoader } from './AnotherPage';
import Root from './Root';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/somepage",
                element: <SomePage />,
                loader: somePageLoader
            },
            {
                path: "/anotherpage",
                element: <AnotherPage />,
                loader: anotherPageLoader
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
