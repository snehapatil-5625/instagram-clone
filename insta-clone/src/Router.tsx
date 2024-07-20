import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import ExplorePage from "./pages/ExplorePage";
import ReelsPage from "./pages/ReelsPage";
import ProfilePage from "./pages/ProfilePage";
import MessagePage from "./pages/MessagePage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/reels",
        element: <ReelsPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/direct/index",
        element: <MessagePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
