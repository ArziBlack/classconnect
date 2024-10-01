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
import { MakePayment } from "./pages/Student/components/Billing/MakePayment";
import { MyCourses } from "./pages/Student/views/MyCourses";
import { Assessment } from "./pages/Student/views/Assessments";
import { Assessments as TutorAssessment } from "./pages/Instructor/views/Assessments";
import { Home as StudentHome } from "./pages/Student/views/Home";
import { Home as TutorHome } from "./pages/Instructor/views/Home";
import { Students } from "./pages/Instructor/views/Students";
import { Browse } from "./pages/Student/components/Courses/Browse";
import { Started } from "./pages/Student/components/Courses/Started";
import { ProfileDetails } from "./pages/Student/components/Profile/ProfileDetails";
import { Notification } from "./pages/Student/views/Notification";
import { Invite } from "./pages/Student/components/Profile/Invite";
import { BecomeTutor } from "./pages/Student/components/Profile/BecomeTutor";
import { MyTutors } from "./pages/Student/components/Tutors/MyTutors";
import { Approved } from "./pages/Student/components/Tutors/Approved";
import { PersonalAssessments } from "./pages/Student/components/Assessments/PersonalAssessments";
import { GeneralAssessments } from "./pages/Student/components/Assessments/GeneralAssessments";
import { Content } from "./pages/Student/components/Courses/Content";
import { TutorDetails } from "./pages/Student/components/Tutors/TutorDetails";
import AboutMe from "./pages/Student/components/Tutors/AboutMe";
import StudentEmailV from "./pages/StudentEmailV";
import PrivateRoute from "./utils/ProtectedRoute";
import Loader from "./utils/Loader";
import { MyStudents } from "./pages/Instructor/components/Students/MyStudents";
import { Curriculum } from "./pages/Instructor/views/Curriculum";
import StudentDetail from "./pages/Instructor/views/Studentdetail";
import { CreateAssessment } from "./pages/Instructor/components/Assessments/CreateAssessment";
import { CreateReport } from "./pages/Instructor/components/Assessments/CreateReport";
import CreateClassNotice from "./pages/Instructor/components/Assessments/CreateClassNotice";
import { Billing } from "./pages/Student/views/Billing";
import { PaymentHistory } from "./pages/Student/components/Billing/PaymentHistory";
import TutorEmailV from "./pages/TutorEmailV";
import NotificationTutor from "./pages/Instructor/views/NotificationTutor";
import { Referral } from "./pages/Student/views/Referral";
import { Internship } from "./pages/Student/views/Internship";
import { Scholarship } from "./pages/Student/views/Scholarship";
import { ClassReport } from "./pages/Instructor/components/Assessments/ClassReport";
import TutorNewPassword from "./pages/TutorNewPassword";
import StudentNewPassword from "./pages/StudentNewPassword";
import TutorPasswordV from "./pages/TutorPasswordV";
import StudentPasswordV from "./pages/StudentPasswordV";
import TutorRecommendation from "./pages/TutorRecommendation";
import AwaitingStudentEmailV from "./pages/AwaitingStudentEmailV";

function AppContent() {
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState("/");

  useEffect(() => {
    if (
      location.pathname !== "/signin/tutor" &&
      location.pathname !== "/signin/student" &&
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
      case "/programs":
        return <Courses />;
      default:
        return <Home />;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="signin/:user"
          element={getCurrentComponent(previousPath)}
        />
        <Route path="register" element={getCurrentComponent(previousPath)} />
        <Route path="apply" element={getCurrentComponent(previousPath)} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="tutor" element={<Tutor />} />
        <Route path="about" element={<About />} />
        <Route path="upload" element={<FireBaseUpload />} />
        <Route path="programs" element={<Courses />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>

      <Route path="/student" element={<PrivateRoute />}>
        <Route element={<StudentLayout />}>
          <Route index element={<StudentHome />} />
          <Route path="tutors" element={<Tutors />}>
            <Route index element={<Approved />} />
            <Route path="my-tutors" element={<MyTutors />} />
          </Route>
          <Route path="tutors/:tutorId" element={<TutorDetails />}>
            <Route index element={<AboutMe />} />
          </Route>
          <Route path="courses/:courseId" element={<Content />} />
          <Route path="courses" element={<MyCourses />}>
            <Route index element={<Browse />} />
            <Route path="my-courses" element={<Started />} />
          </Route>
          <Route path="profile" element={<Profile />}>
            <Route index element={<ProfileDetails />} />
            <Route path="notification" element={<Notification />} />
            <Route path="invite" element={<Invite />} />
            <Route path="become-a-tutor" element={<BecomeTutor />} />
          </Route>
          <Route path="assessments" element={<Assessment />}>
            <Route index element={<PersonalAssessments />} />
            <Route path="class-assessments" element={<GeneralAssessments />} />
          </Route>
          <Route path="assessment" element={<Assessment />} />
          <Route path="referral" element={<Referral />} />
          <Route path="internship" element={<Internship />} />
          <Route path="scholarship" element={<Scholarship />} />
          <Route path="billing" element={<Billing />}>
            <Route index element={<MakePayment />} />
            <Route path="payment-history" element={<PaymentHistory />} />
          </Route>
          <Route path="notification" element={<Notification />} />
        </Route>
      </Route>

      <Route path="/instructor" element={<PrivateRoute />}>
        <Route element={<TutorLayout />}>
          <Route index element={<TutorHome />} />
          <Route path="students" element={<Students />}>
            <Route index element={<MyStudents />} />
          </Route>
          <Route path="students/:studentId" element={<StudentDetail />} />
          <Route path="curriculum" element={<Curriculum />}></Route>
          <Route path="detailed" element={<Content />}>
            <Route index element={<Content />} />
          </Route>
          <Route path="profile" element={<TutorProfile />}></Route>
          <Route path="feedback" element={<CreateReport />}></Route>
          <Route path="assessments" element={<TutorAssessment />}>
            <Route index element={<CreateClassNotice />} />
            <Route path="create-assessment" element={<CreateAssessment />} />
            <Route path="class-report" element={<ClassReport />} />
          </Route>
          <Route path="notification" element={<NotificationTutor />} />
          <Route path="assessment" element={<Assessment />} />
        </Route>
      </Route>

      <Route path="reset" element={<ResetPassword />} />
      <Route path="verify" element={<VerifyAccount />} />
      <Route
        path="/tutor-recommendation/:recommendationStatus/:tutorId/:studentId"
        element={<TutorRecommendation />}
      />
      <Route
        path="/email-verify/student/:studentId/:uniqueString"
        element={<StudentEmailV />}
      />
      <Route
        path="/email-verify/awaiting-student/:studentId/:uniqueString"
        element={<AwaitingStudentEmailV />}
      />
      <Route
        path="/confirmation/tutor/password-change/:resetToken/:email"
        element={<TutorPasswordV />}
      />
      <Route
        path="/confirmation/student/password-change/:resetToken/:email"
        element={<StudentPasswordV />}
      />
      <Route path="/new-password/tutor" element={<TutorNewPassword />} />
      <Route path="/new-password/student" element={<StudentNewPassword />} />
      <Route
        path="/email-verify/tutor/:tutorId/:uniqueString"
        element={<TutorEmailV />}
      />
      <Route path="reset-check" element={<CheckReset />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="loader" element={<Loader />} />
    </Routes>
  );
}

export default AppContent;
