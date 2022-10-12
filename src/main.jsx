import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./pages/error-page.jsx";
import Dashboard from "./pages/dashboard.jsx";
import NotificationList from "./pages/notification-list.jsx";
import SurveyList from "./pages/survey-list.jsx";
import Login from "./pages/login";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/survey-list",
    element: <SurveyList/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/notification-list",
    element: <NotificationList/>,
    errorElement: <ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
