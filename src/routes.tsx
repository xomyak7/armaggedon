import Asteroid from "./Pages/Asteroid";
import Home from "./Pages/Home";
import Send from "./Pages/Send";

type RouteType = {
  path: string;
  element: React.ReactNode;
};

export const routes: RouteType[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Asteroid />,
  },
];

export const routesMobileSend: RouteType[] = [
  {
    path: "/m.send",
    element: <Send />,
  },
];
