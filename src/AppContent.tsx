import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./pages/index";
import Courses from "./components/Courses";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import VerifyAccount from "./pages/VerifyEmail";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Tutor from "./pages/Tutor";
import Privacy from "./pages/Privacy";
import FireBaseUpload from "./pages/FireBaseUpload";
import CheckReset from "./pages/CheckReset";

function AppContent() {
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState("/");

  useEffect(() => {
    if (location.pathname !== "/signin" && location.pathname !== "/register") {
      setPreviousPath(location.pathname);
    }
  }, [location.pathname]);

  const getCurrentComponent = (pathname: string) => {
    switch (pathname) {
      case "/pricing":
        return <Pricing />;
      case "/tutor":
        return <Tutor />;
      case "/about":
        return <About />;
      case "/courses":
        return <Courses />;
      default:
        return <Home />;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={getCurrentComponent(previousPath)} />
        <Route path="register" element={getCurrentComponent(previousPath)} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="tutor" element={<Tutor />} />
        <Route path="about" element={<About />} />
        <Route path="upload" element={<FireBaseUpload />} />
        <Route path="courses" element={<Courses />} />

        <Route path="privacy" element={<Privacy />} />
      </Route>
      <Route path="reset" element={<ResetPassword />} />
      <Route path="verify" element={<VerifyAccount />} />
      <Route path="reset-check" element={<CheckReset />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppContent;
