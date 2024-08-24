import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import components
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import NotFound from "./pages/NotFound";
import ScrollToTopVisible from "./components/ScrollToTopVisible";

const Layout = () => (
  <>
    <Loader />
    <Header />
    <ScrollToTopVisible />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/room/:id", element: <RoomDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
