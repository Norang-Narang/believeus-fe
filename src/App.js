import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { BiSolidEdit } from "react-icons/bi";

import { PATH } from "../src/constants/path";
import Matching from "./pages/Matching";
import WorkCondition from "./pages/WorkCondition";
import ManagerSignup from "./pages/signup/manager";
import SignupCenter from "./pages/signup/center";

import Login from "./pages/login/Login";
import Signup from "./pages/signup";
import ProtectedRoute from "./components/common/ProtectedRoute/index";
import Mypage from "./pages/mypage/Mypage";
import Onboarding from "./pages/Onboarding";

export const routes = [
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "", // 루트 경로
        element: <Onboarding />,
        layout: {
          showNav: false,
          showTopNav: false,
        },
      },
      {
        path: PATH.HOME,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
        layout: {
          showNav: true,
          showTopNav: true,
          topNavProps: { variant: "text-with-icon", label: "홈" },
        },
      },
      {
        path: PATH.WORK_CONDITION,
        element: (
          <ProtectedRoute>
            <WorkCondition />
          </ProtectedRoute>
        ),
        layout: {
          showNav: true,
          showTopNav: true,
          topNavProps: { variant: "text-with-icon", label: "근무조건" },
        },
      },
      {
        path: PATH.MATCHING,
        element: (
          <ProtectedRoute>
            <Matching />
          </ProtectedRoute>
        ),
        layout: {
          showNav: true,
          showTopNav: true,
          topNavProps: { variant: "text-with-icon", label: "매칭 관리" },
        },
      },
      {
        path: PATH.MY_PAGE,
        element: (
          <ProtectedRoute>
            <Mypage />
          </ProtectedRoute>
        ),
        layout: {
          showNav: true,
          showTopNav: true,
          topNavProps: {
            variant: "text-with-icon",
            label: "마이페이지",
            rightIcons: [
              <BiSolidEdit
                size={24}
                style={{
                  color: "var(--color-grayscale-400)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("openEditModal"));
                }}
              />,
            ],
          },
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
        path: PATH.SIGNUP_CENTER,
        element: <SignupCenter />,
        layout: {
          showNav: false,
          showTopNav: true,
          topNavProps: { variant: "only-icon" },
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
