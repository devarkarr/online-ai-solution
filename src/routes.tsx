import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./layouts/App";

const Landing = lazy(() => import("@/pages/landing"));

const Router = () => {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
