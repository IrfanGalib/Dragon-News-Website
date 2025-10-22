import { createBrowserRouter } from "react-router";
import HomeLayoutes from "../Layoutes/HomeLayoutes";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layoutes/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PriverRoute from "../Provider/PriverRoute";
import Loading from "../Pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutes />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("../news.json"),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PriverRoute>
        <NewsDetails />
      </PriverRoute>
    ),
    loader: () => fetch("../news.json"),
    hydrateFallbackElement: <Loading />,
  },
  {
    path: "/*",
    element: <h2>ERROR 404</h2>,
  },
]);

export default router;
