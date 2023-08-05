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
    title: "Resource Center",
    newTab: false,
    path: "/help-center"
  },
  {
    id: 3,
    title: "Portals",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Package Delivery Portal",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Fulfillment Portal",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Tracking Portal",
        newTab: false,
        path: "/auth/signup",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/contact"
  },
];

export default menuData;
