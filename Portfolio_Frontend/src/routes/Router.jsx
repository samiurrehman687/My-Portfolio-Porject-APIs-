import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));
const UnderConstruction = lazy(() => import("../pages/UnderConstruction"));

const repoName = import.meta.env.VITE_REPO_NAME;

const basename =
  repoName && repoName.trim() !== ""
    ? `/${repoName.replace(/^\/+|\/+$/g, "")}`
    : "";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "underconstruction",
          element: <UnderConstruction />,
        },
      ],
    },
  ],
  { basename }
);