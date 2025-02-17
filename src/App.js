import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { PATH } from "../src/constants/path";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: PATH.HOME,
        element: <Home />,
      },
      {
        path: PATH.MATCHING,
        element: <div>매칭</div>,
      },
      {
        path: PATH.WORK_CONDITION,
        element: <div>근무조건</div>,
      },
      {
        path: PATH.MY_PAGE,
        element: <div>마이페이지</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
