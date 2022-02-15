import { memo, Suspense, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "_pages/home";
import { routes, IRoute } from "_common/configs/routesConfig";
import Layout from "_pages/layout";
export default memo(() => {
  const generateRoute = useCallback((route: IRoute, key: number) => {
    if (route?.element)
      // if (route.isPrivate) {
      //   return (
      //     <PrivateRoute
      //       key={key}
      //       path={route.path}
      //       element={route.component}
      //     />
      //   );
      // } else
      return (
        <Route
          key={key}
          path={route.path}
          element={
            <Layout>
              <route.element />
            </Layout>
          }
        />
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
          {/* <Route path="/redirect" component={Redirect} />
      <Route path="/error-pages/error-403" component={Error403} />  */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
});
