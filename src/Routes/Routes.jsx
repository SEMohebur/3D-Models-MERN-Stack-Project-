import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AllModels from "../Pages/AllModels";
import AddModel from "../Pages/AddModel";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import DetailPage from "../Pages/DetailPage";
import UpdateModels from "../Pages/UpdateModels";
import MyModel from "../Pages/MyModel";
import MyDownload from "../Pages/MyDownload";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch("https://3d-models-server-sigma.vercel.app/latest-models"),
      },
      { path: "/about", element: <About /> },
      {
        path: "/allModels",
        element: <AllModels />,
        loader: () => fetch("https://3d-models-server-sigma.vercel.app/models"),
      },
      {
        path: "/addModel",
        element: (
          <PrivateRoutes>
            <AddModel />
          </PrivateRoutes>
        ),
      },
      {
        path: "/detail/:id",
        element: (
          <PrivateRoutes>
            <DetailPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateModels/:id",
        element: (
          <PrivateRoutes>
            <UpdateModels></UpdateModels>
          </PrivateRoutes>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://3d-models-server-sigma.vercel.app/models/${params.id}`
          );
        },
      },
      {
        path: "/myModel",
        element: (
          <PrivateRoutes>
            <MyModel />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myDownload",
        element: (
          <PrivateRoutes>
            <MyDownload />
          </PrivateRoutes>
        ),
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
