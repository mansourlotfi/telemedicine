import loadable, { LoadableComponent } from "@loadable/component";
const Home = loadable(() => import("_pages/home"));

interface IRoute {
  title: string;
  path?: string;
  isExact?: boolean;
  isPrivate?: boolean;
  hasMenuField: boolean;
  hasParent?: any[];
  icon?: any;
  component?: LoadableComponent<unknown>;
  children?: IRoute[];
}

interface IRoutesName {
  [name: string]: {
    title: string;
    path?: string;
  };
}

export const routesName: IRoutesName = {
  default: {
    title: "default",
    path: "/",
  },
  asd: {
    title: "asd",
  },

  error403: {
    title: "Error 403",
    path: "/error-pages/error-403",
  },
  error404: {
    title: "Error 404",
    path: "",
  },
};

const routes: IRoute[] = [
  {
    ...routesName.default,
    isExact: true,
    isPrivate: true,
    hasMenuField: false,
    component: Home,
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
  //         component: asd,
  //         hasMenuField: true,
  //       },
  //       {
  //         ...routesName.asd,
  //         isExact: false,
  //         isPrivate: true,
  //         component: asd,
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
  //   component: Error403,
  // },
  //   {
  //     ...routesName.error404,
  //     isExact: true,
  //     children: [],
  //     isPrivate: true,
  //     hasMenuField: false,
  //     component: Error404,
  //   },
];
