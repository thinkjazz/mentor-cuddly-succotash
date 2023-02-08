import LoadingScreen from "components/LoadingScreen";
import useSettings from "hooks/useSettings";
import DashboardLayoutBase from "layouts/layout-base/DashboardLayout";
import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};


// account
const Account = Loadable(lazy(() => import("./pages/accounts/account")));


// profile
const Profile = Loadable(lazy(() => import("./pages/profiles/profile")));


// 404/Error page
const Error = Loadable(lazy(() => import("./pages/404")));

const ActiveLayout = () => {
  const { settings } = useSettings();
  // console.log(settings);
  switch (settings.activeLayout) {
    case "layout":
      return <DashboardLayoutBase />;
    default:
      return <DashboardLayoutBase />;
  }
};

const routes = () => {
  return [

    {
      path: "/",
      element: <ActiveLayout />,
      children: dashboardRoutes,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];
};



const dashboardRoutes = [
  { path: "/", element: <Profile /> },
  { path: "account", element: <Account /> },
  { path: "profile", element: <Profile /> },
];

export default routes;
