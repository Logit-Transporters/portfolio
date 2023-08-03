import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#features"
  },
  {
    id: 2.1,
    title: "Help Center",
    newTab: false,
    path: "/blog"
  },
  {
    id: 2.3,
    title: "Docs",
    newTab: false,
    path: "/docs"
  },
  {
    id: 3,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support"
  },
];

export default menuData;
