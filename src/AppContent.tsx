import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Tutor from "./pages/Tutor";
import Layout from "./pages/index";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Courses from "./components/Courses";
import CheckReset from "./pages/CheckReset";
import StudentLayout from "./pages/Student";
import VerifyAccount from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import FireBaseUpload from "./pages/FireBaseUpload";
import { Tutors } from "./pages/Student/views/Tutors";
import { Profile } from "./pages/Student/views/Profile";
import { Billing } from "./pages/Student/views/Billing";
import { MyCourses } from "./pages/Student/views/MyCourses";
import { Assessment } from "./pages/Student/views/Assessments";
import { Home as StudentHome } from "./pages/Student/views/Home";
import { Browse } from "./pages/Student/components/Courses/Browse";
import { Started } from "./pages/Student/components/Courses/Started";

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
      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<StudentHome />} />
        <Route path="tutors" element={<Tutors />} />
        <Route path="courses" element={<MyCourses />}>
          <Route index element={<Browse />} />
          <Route path="started" element={<Started />} />
          <Route path="ongoing" element={<Started />} />
          <Route path="completed" element={<Started />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="billing" element={<Billing />} />
      </Route>
      <Route path="reset" element={<ResetPassword />} />
      <Route path="verify" element={<VerifyAccount />} />
      <Route path="reset-check" element={<CheckReset />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppContent;
