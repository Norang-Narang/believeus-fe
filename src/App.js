import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Mypage from "./pages/Mypage";

import { PATH } from "../src/constants/path";
import Matching from "./pages/Matching";
import WorkCondition from "./pages/WorkCondition";
import ManagerSignup from "./pages/signup/manager";

import Login from "./pages/login/index";
import Signup from "./pages/signup";

export const routes = [
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "", // 루트 경로
        element: <div>루트</div>,
        layout: {
          showNav: false,
          showTopNav: false,
        },
      },
      {
        path: PATH.HOME,
        element: <Home />,
        layout: {
          showNav: true,
          showTopNav: true,
          topNavProps: { variant: "text-with-icon", label: "홈" },
        },
      },
      {
        path: PATH.WORK_CONDITION,
        element: <WorkCondition />,
        layout: {
          showNav: true,
          showTopNav: true,
          topNavProps: { variant: "only-text", label: "근무조건" },
        },
      },
      {
        path: PATH.MATCHING,
        element: <Matching />,
        layout: {
          showNav: true,
          showTopNav: true,
          topNavProps: { variant: "only-text", label: "매칭" },
        },
      },
      {
        path: PATH.MY_PAGE,
        element: <Mypage />,
        layout: {
          showNav: true,
          showTopNav: true,
          topNavProps: { variant: "only-icon" },
        },
      },
      {
        path: "login",
        element: <Login />,
        layout: {
          showNav: false,
          showTopNav: false,
        },
      },
      {
        path: "signup",
        element: <Signup />,
        layout: {
          showNav: false,
          showTopNav: false,
        },
      },
      {
        path: PATH.SIGNUP_MANAGER,
        element: <ManagerSignup />,
        layout: {
          showNav: false,
          showTopNav: true,
          topNavProps: { variant: "only-icon" },
        },
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
