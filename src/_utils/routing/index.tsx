import { memo, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "_pages/home";

export default memo(() => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />

            {/* <Route index element={<Home />} /> */}
            {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>

      {/* {routes.map((route: IRoute, index: number) => {
        if (route?.children?.length) {
          return route.children.map((child: IRoute) => {
            return generateRoute(child, index);
          });
        } else return generateRoute(route, index);
      })}
      <Route path="/redirect" component={Redirect} />
      <Route path="/error-pages/error-403" component={Error403} /> */}
    </Suspense>
  );
});
