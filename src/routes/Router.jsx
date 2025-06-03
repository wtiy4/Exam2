import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import Signup from "../pages/Signup";
import Nav from "../components/Nav";

function Layout() {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/products/:id", element: <ProductPage /> },
    ],
  },
]);
// { path: "/products/:id", element: <ProductPage /> },

function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
