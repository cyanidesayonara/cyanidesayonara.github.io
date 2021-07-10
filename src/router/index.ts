import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Blog from "@/views/Blog.vue";

import BlogEntries from "@/blogs/index.json";
interface Entry {
  id: string;
  date: string;
  title: string;
  description: string;
}

interface BlogSection {
  year: string;
  entries: Entry[];
}

const blogRoutes = BlogEntries.map((section: BlogSection) => {
  const children = section.entries.map((entry: Entry) => ({
    path: `/blog/${section.year}/${entry.id}`,
    name: `/blog/${section.year}/${entry.id}`,
    component: () => import(`@/blogs/${section.year}/${entry.id}.md`),
    meta: {
      title: `Blog ${section.year} ${entry.id}`,
    },
  }));
  return {
    path: `/blog`,
    name: section.year,
    component: () => import("@/views/BlogEntry.vue"),
    meta: {
      title: `Blog ${section.year}`,
    },
    children,
  };
});

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "portfolio-en" */ "@/views/PortfolioEn.vue"),
    meta: {
      title: "Portfolio in English",
    },
  },
  {
    path: "/en",
    name: "portfolio-en",
    component: () =>
      import(/* webpackChunkName: "portfolio-en" */ "@/views/PortfolioEn.vue"),
    meta: {
      title: "Portfolio in English",
    },
  },
  {
    path: "/fi",
    name: "portfolio-fi",
    component: () =>
      import(/* webpackChunkName: "portfolio-fi" */ "@/views/Portfolio.vue"),
    meta: {
      title: "Portfolio suomeksi",
    },
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  ...blogRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
