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
import TutorLayout from "./pages/Instructor";
import VerifyAccount from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import FireBaseUpload from "./pages/FireBaseUpload";
import { Tutors } from "./pages/Student/views/Tutors";
import Profile from "./pages/Student/views/Profile";
import TutorProfile from "./pages/Instructor/views/Profile";
import { Billing } from "./pages/Student/views/Billing";
import { MyCourses } from "./pages/Student/views/MyCourses";
import { Assessment } from "./pages/Student/views/Assessments";
import { Assessment as TutorAssessment } from "./pages/Instructor/views/Assessments";
import { Home as StudentHome } from "./pages/Student/views/Home";
import { Home as TutorHome } from "./pages/Instructor/views/Home";
import { Students } from "./pages/Instructor/views/Students";
import { Browse } from "./pages/Student/components/Courses/Browse";
import { Started } from "./pages/Student/components/Courses/Started";
import { ProfileDetails } from "./pages/Student/components/Profile/ProfileDetails";
import { Notification } from "./pages/Student/components/Profile/Notification";
import { TuitionFee } from "./pages/Student/components/Profile/TuitionFee";
import { Invite } from "./pages/Student/components/Profile/Invite";
import { BecomeTutor } from "./pages/Student/components/Profile/BecomeTutor";
import { MyTutors } from "./pages/Student/components/Tutors/MyTutors";
import { Approved } from "./pages/Student/components/Tutors/Approved";
import { Recommended } from "./pages/Student/components/Tutors/Recommended";
import { PersonalAssessments } from "./pages/Student/components/Assessments/PersonalAssessments";
import { GeneralAssessments } from "./pages/Student/components/Assessments/GeneralAssessments";
import { CourseDetails } from "./pages/Student/components/Courses/CourseDetails";
import { Content } from "./pages/Student/components/Courses/Content";
import { Details } from "./pages/Student/components/Courses/Details";
import { OnGoing } from "./pages/Student/components/Courses/OnGoing";
import { Completed } from "./pages/Student/components/Courses/Completed";
import { TutorDetails } from "./pages/Student/components/Tutors/TutorDetails";
import AboutMe from "./pages/Student/components/Tutors/AboutMe";
import EmailV from "./pages/EmailV";
import PrivateRoute from "./utils/ProtectedRoute";
import Loader from "./utils/Loader";
import { MyStudents } from "./pages/Instructor/components/Students/MyStudents";
import { Curriculum } from "./pages/Instructor/views/Curriculum";
import StudentDetail from "./pages/Instructor/views/Studentdetail";

function AppContent() {
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState("/");

  useEffect(() => {
    if (
      location.pathname !== "/signin" &&
      location.pathname !== "/register" &&
      location.pathname !== "/apply"
    ) {
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
        <Route path="apply" element={getCurrentComponent(previousPath)} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="tutor" element={<Tutor />} />
        <Route path="about" element={<About />} />
        <Route path="upload" element={<FireBaseUpload />} />
        <Route path="courses" element={<Courses />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>

      <Route path="/student" element={<PrivateRoute />}>
        <Route element={<StudentLayout />}>
          <Route index element={<StudentHome />} />
          <Route path="tutors" element={<Tutors />}>
            <Route index element={<Approved />} />
            <Route path="my-tutors" element={<MyTutors />} />
            <Route path="recommended" element={<Recommended />} />
            <Route path="completed" element={<Started />} />
          </Route>
          <Route path="tutors/:tutorId" element={<TutorDetails />}>
            <Route index element={<AboutMe />} />
          </Route>
          <Route path="courses/:courseId" element={<CourseDetails />}>
            <Route index element={<Content />} />
            <Route path="description" element={<Details />} />
          </Route>
          <Route path="courses" element={<MyCourses />}>
            <Route index element={<Browse />} />
            <Route path="started" element={<Started />} />
            <Route path="ongoing" element={<OnGoing />} />
            <Route path="completed" element={<Completed />} />
          </Route>
          <Route path="detailed" element={<CourseDetails />}>
            <Route index element={<Content />} />
            <Route path="details" element={<Details />} />
          </Route>
          <Route path="profile" element={<Profile />}>
            <Route index element={<ProfileDetails />} />
            <Route path="notification" element={<Notification />} />
            <Route path="tuition-fee" element={<TuitionFee />} />
            <Route path="invite" element={<Invite />} />
            <Route path="become-a-tutor" element={<BecomeTutor />} />
          </Route>
          <Route path="assessments" element={<Assessment />}>
            <Route index element={<PersonalAssessments />} />
            <Route
              path="general-assessments"
              element={<GeneralAssessments />}
            />
          </Route>
          <Route path="assessment" element={<Assessment />} />
          <Route path="billing" element={<Billing />} />
        </Route>
      </Route>

      <Route path="/instructor" element={<PrivateRoute />}>
        <Route element={<TutorLayout />}>
          <Route index element={<TutorHome />} />
          <Route path="students" element={<Students />}>
            <Route index element={<MyStudents />} />
          </Route>
          <Route path="students/:studentId" element={<StudentDetail />} />
          <Route path="courses/:courseId" element={<CourseDetails />}>
            <Route index element={<Content />} />
            <Route path="description" element={<Details />} />
          </Route>
          <Route path="curriculum" element={<Curriculum />}></Route>
          <Route path="detailed" element={<CourseDetails />}>
            <Route index element={<Content />} />
            <Route path="details" element={<Details />} />
          </Route>
          <Route path="profile" element={<TutorProfile />}></Route>
          <Route path="assessments" element={<TutorAssessment />}></Route>
          <Route path="assessment" element={<Assessment />} />
          <Route path="billing" element={<Billing />} />
        </Route>
      </Route>

      <Route path="reset" element={<ResetPassword />} />
      <Route path="verify" element={<VerifyAccount />} />
      <Route
        path="email-verify/:studentId/:uniqueString"
        element={<EmailV />}
      />
      <Route path="reset-check" element={<CheckReset />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="loader" element={<Loader />} />
    </Routes>
  );
}

export default AppContent;
