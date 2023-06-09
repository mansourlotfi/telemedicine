import { memo, Suspense, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes, IRoute } from "_common/configs/routesConfig";
import CustomizedSnackbars from "_components/toast";
import Layout from "_pages/layout";
import RequireAuth from "./RequireAuth";
export default memo(() => {
  const generateRoute = useCallback((route: IRoute, key: number) => {
    if (route?.element)
      if (route.isPrivate) {
        return (
          <Route key={key} element={<Layout />}>
            <Route
              path={route.path}
              key={key}
              element={
                <RequireAuth>
                  <route.element />
                </RequireAuth>
              }
            />
          </Route>
        );
      } else
        return (
          <Route key={key} element={<Layout />}>
            <Route key={key} path={route.path} element={<route.element />} />
          </Route>
        );
    return <Fragment key={key} />;
  }, []);
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          {routes.map((route: IRoute, index: number) => {
            if (route?.children?.length) {
              return route.children.map((child: IRoute) => {
                return generateRoute(child, index);
              });
            } else return generateRoute(route, index);
          })}
        </Routes>
        <CustomizedSnackbars />
      </BrowserRouter>
    </Suspense>
  );
});
