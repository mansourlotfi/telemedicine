import loadable, { LoadableComponent } from "@loadable/component";
const Home = loadable(() => import("_pages/home"));

interface IRoute {
  title: string;
  path: string;
  isPrivate?: boolean;
  hasMenuField: boolean;
  hasParent?: any[];
  icon?: any;
  element?: LoadableComponent<unknown>;
  children?: IRoute[];
}

interface IRoutesName {
  [name: string]: {
    title: string;
    path: string;
  };
}

export const routesName: IRoutesName = {
  default: {
    title: "default",
    path: "/",
  },
  asd: {
    title: "asd",
    path: "/asd",
  },

  error403: {
    title: "Error 403",
    path: "/error-pages/error-403",
  },
  error404: {
    title: "Error 404",
    path: "/404",
  },
};

const routes: IRoute[] = [
  {
    ...routesName.default,
    isPrivate: true,
    hasMenuField: false,
    element: Home,
  },
  //   {
  //     ...routesName.asd,
  //     hasMenuField: true,
  //     hasParent: [""],
  //     children: [
  //       {
  //         ...routesName.asd,
  //         isExact: false,
  //         isPrivate: true,
  //         element: asd,
  //         hasMenuField: true,
  //       },
  //       {
  //         ...routesName.asd,
  //         isExact: false,
  //         isPrivate: true,
  //         element: asd,
  //         hasMenuField: false,
  //       },
  //     ],
  //   },
  // {
  //   ...routesName.error403,
  //   isExact: true,
  //   children: [],
  //   isPrivate: true,
  //   hasMenuField: false,
  //   element: Error403,
  // },
  //   {
  //     ...routesName.error404,
  //     isExact: true,
  //     children: [],
  //     isPrivate: true,
  //     hasMenuField: false,
  //     element: Error404,
  //   },
];

export { routes };
export type { IRoute };
