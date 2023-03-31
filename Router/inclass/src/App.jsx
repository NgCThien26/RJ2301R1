import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from "./components/page1";
import Homepage from "./components/Homepage";
import Page2 from "./components/page2";
import NotFound from "./components/Notfound";
import Layout from "./components/Layout";
import Page3 from "./components/Page3";

// tạo layout cho page
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      {
        path: "page1", // kh được phép có "/"
        element: <Page1 />,
      },
      {
        path: "page2",
        element: <Page2 />,
      },
      {
        path: "page3/:id",
        element: <Page3 />,
      },
    ],
  },
  // {
  //   path: '/page1',
  //   element: <Page1 />
  // },
  // {
  //   path: '/page2',
  //   element: <Page2 />
  // },
  {
    path: "*", // nếu như router kh match với route nào hết
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
