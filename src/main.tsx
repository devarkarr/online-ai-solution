import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Router from "./routes";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryclient = new QueryClient();
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<Router />} />)
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryclient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>
);
