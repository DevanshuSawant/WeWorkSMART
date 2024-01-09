import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import ErrorPage from "./pages/error-page.jsx";
import Dashboard from "./pages/dashboard.jsx";
import NotificationList from "./pages/notification-list.jsx";
import SurveyList from "./pages/survey-list.jsx";
import Login from "./pages/login";
import "./styles.css";
import PrivateRoutes from "./utils/private-routes.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter
      basename="/WeWorkSMART/">
        <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route 
            path="/" 
            element={<Dashboard/>}
            errorElement={<ErrorPage/>}
          />
          <Route
            path="/survey-list"
            element={<SurveyList/>}
            errorElement={<ErrorPage/>}
          />
          <Route
            path="/notification-list"
            element={<NotificationList/>}
            errorElement={<ErrorPage/>}
          />
        </Route>    
        <Route
          path="/login"
          element={<Login/>}
          errorElement={<ErrorPage/>}
        />
        
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
