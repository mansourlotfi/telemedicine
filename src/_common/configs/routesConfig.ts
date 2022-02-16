import loadable, { LoadableComponent } from "@loadable/component";
const Home = loadable(() => import("_pages/home"));
const PatientProfile = loadable(() => import("_pages/patientProfile"));
const BookingAppointment = loadable(() => import("_pages/bookingAppointment"));
const Privacy = loadable(() => import("_pages/privacy"));
const AboutUs = loadable(() => import("_pages/aboutUs"));
const Faqs = loadable(() => import("_pages/faqs"));
const Blogs = loadable(() => import("_pages/blogs"));
const ContactUs = loadable(() => import("_pages/contactUs"));
const BlogPost = loadable(() => import("_pages/blogPost"));

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
  PatientProfile: {
    title: "PatientProfile",
    path: "/patientProfile",
  },
  BookingAppointment: {
    title: "BookingAppointment",
    path: "/bookingAppointment",
  },
  Privacy: {
    title: "Privacy",
    path: "/privacy",
  },
  AboutUs: {
    title: "AboutUs",
    path: "/aboutUs",
  },
  Faqs: {
    title: "Faqs",
    path: "/faqs",
  },
  Blogs: {
    title: "Blogs",
    path: "/blogs",
  },
  ContactUs: {
    title: "ContactUs",
    path: "/contactUs",
  },
  BlogPost: {
    title: "ContactUs",
    path: "/blogPost",
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
    isPrivate: false,
    hasMenuField: false,
    element: Home,
  },
  {
    ...routesName.PatientProfile,
    isPrivate: true,
    hasMenuField: false,
    element: PatientProfile,
  },
  {
    ...routesName.BookingAppointment,
    isPrivate: false,
    hasMenuField: false,
    element: BookingAppointment,
  },
  {
    ...routesName.Privacy,
    isPrivate: false,
    hasMenuField: false,
    element: Privacy,
  },
  {
    ...routesName.AboutUs,
    isPrivate: false,
    hasMenuField: false,
    element: AboutUs,
  },
  {
    ...routesName.Faqs,
    isPrivate: false,
    hasMenuField: false,
    element: Faqs,
  },
  {
    ...routesName.Blogs,
    isPrivate: false,
    hasMenuField: false,
    element: Blogs,
  },
  {
    ...routesName.ContactUs,
    isPrivate: false,
    hasMenuField: false,
    element: ContactUs,
  },
  {
    ...routesName.BlogPost,
    isPrivate: false,
    hasMenuField: false,
    element: BlogPost,
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
