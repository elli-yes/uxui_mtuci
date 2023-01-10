import { createBrowserRouter } from "react-router-dom";
import App from './App'
import Root from "./features/Home/components/Root";
import TasksPage from "./features/Tasks/components/TasksPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Root/>,
      },
      {
        path: "tasks",
        element: <TasksPage/>,
      },
    ]
  },
]);

export default {
  router
}
