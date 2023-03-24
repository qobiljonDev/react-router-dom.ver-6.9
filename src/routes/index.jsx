import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const About = lazy(() => import("pages/About"));
const Contact = lazy(() => import("pages/Contact"));
const ID = lazy(() => import("pages/ID"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "about/:id",
    element: <ID />,
  },
]);
const Routes = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default Routes;
