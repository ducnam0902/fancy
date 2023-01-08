import { lazy, Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";
import { CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Navigation = lazy(() => import("./components/Navigation"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Blog = lazy(() => import("./pages/Blog"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/ContactUs"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const App = () => {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Suspense fallback={<Skeleton variant="rounded" />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="blog" element={<Blog />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
