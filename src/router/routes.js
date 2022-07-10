import Layout from "@/components/layout/";

export const routes = [
  {
    // 首頁
    name: "homePage",
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        name: "homedIndex",
        path: "home",
        component: () => import("@/views/HomePage"),
        meta: {
          title: "首頁",
        },
      },
    ],
  },
];
