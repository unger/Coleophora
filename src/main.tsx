import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";
import GroupDetail from "./views/GroupDetail";
import GroupList from "./views/GroupList";
import CaseGroupDetail from "./views/CaseGroupDetail";
import TaxonDetail from "./views/TaxonDetail";
import UnsureList from "./views/UnsureList";
import UnsureDetail from "./views/UnsureDetail";
import CaseGroupList from "./views/CaseGroupList";

import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      Component: App,
      children: [
        { path: "/", Component: GroupList },
        { path: "/group/:id", Component: GroupDetail },
        { path: "/cases", Component: CaseGroupList },
        { path: "/cases/:id", Component: CaseGroupDetail },
        { path: "/taxon/:slug", Component: TaxonDetail },
        { path: "/unsure", Component: UnsureList },
        { path: "/unsure/:slug", Component: UnsureDetail },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

const root = document.getElementById("root");

if (root === null) {
  throw new Error("Root-element not found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
