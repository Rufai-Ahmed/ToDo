import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Common/Layout";
import { HomeScreen } from "../Pages/HomeScreen";
import { AddTask } from "../Pages/AddTask";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/addtask",
        element: <AddTask />,
      },
    ],
  },
]);
