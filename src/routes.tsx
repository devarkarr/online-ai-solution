import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./layouts/App";
import AppLoader from "./components/app-loader";

const Landing = lazy(() => import("@/pages/landing"));
const NotFound = lazy(() => import("@/pages/error/not-found"));
const Blog = lazy(() => import("@/pages/blogs"));
const AboutUs = lazy(() => import("@/pages/about-us"));
const Event = lazy(() => import("@/pages/events"));

const Router = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about-us" element={<AboutUs />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="events" element={<Event />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
