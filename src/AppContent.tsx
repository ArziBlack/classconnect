import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./pages/index";
import Courses from "./components/Courses";
import AllCourses from "./Routes/Home/Courses/Index";
import College from "./Routes/Home/Courses/College";
import Computer from "./Routes/Home/Courses/Computer";
import HighSchool from "./Routes/Home/Courses/HighSchool";
import Science from "./Routes/Home/Courses/Science";
import Engineering from "./Routes/Home/Courses/Engineering";
import Kindergarten from "./Routes/Home/Courses/Kindergarten";
import ResetPassword from "./components/ResetPassword";
// import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import VerifyAccount from "./pages/VerifyEmail";
import NotFound from "./pages/NotFound";
import MentorProfile from "./components/MentorProfile";
import Tutor from "./pages/Tutor";

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
        return <MentorProfile />;
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
        <Route path="about" element={<MentorProfile />} />
        <Route path="courses" element={<Courses />}>
          <Route index element={<AllCourses />} />
          <Route path="kindergarten" element={<Kindergarten />} />
          <Route path="college" element={<College />} />
          <Route path="high-school" element={<HighSchool />} />
          <Route path="computer" element={<Computer />} />
          <Route path="science" element={<Science />} />
          <Route path="engineering" element={<Engineering />} />
        </Route>
        {/* <Route path="signup" element={<SignUp />} /> */}
      </Route>
      <Route path="reset" element={<ResetPassword />} />
      <Route path="verify" element={<VerifyAccount />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppContent;
