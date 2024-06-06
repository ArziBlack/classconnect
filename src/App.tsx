
import Footer from "./components/Footer";
import MentorProfile from "./components/MentorProfile";
import NewsletterSection from "./components/NewsletterSection";
import ApplyInstructor from "./components/ApplyInstructor";
import CustomComponent from "./components/CustomComponent";

function App() {
  return (
    <div>
       <ApplyInstructor />
      <CustomComponent />
     <NewsletterSection />
      <MentorProfile />
      <Footer />
    </div>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import PricingPackages from "./components/Pricing";
import Courses from "./components/Courses";
import AllCourses from "./Routes/Home/Courses/Index";
import College from "./Routes/Home/Courses/College";
import Computer from "./Routes/Home/Courses/Computer";
import HighSchool from "./Routes/Home/Courses/HighSchool";
import Science from "./Routes/Home/Courses/Science";
import Engineering from "./Routes/Home/Courses/Engineering";
import Kindergarten from "./Routes/Home/Courses/Kindergarten";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <VStack
      backgroundColor={`brand.page`}
      height={`full`}
      fontFamily={`Metropolis`}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/pricing" element={<PricingPackages />} />
            <Route path="/courses" element={<Courses />}>
              <Route index element={<AllCourses />} />
              <Route path="kindergarten" element={<Kindergarten />} />
              <Route path="college" element={<College />} />
              <Route path="high-school" element={<HighSchool />} />
              <Route path="computer" element={<Computer />} />
              <Route path="science" element={<Science />} />
              <Route path="engineering" element={<Engineering />} />
            </Route>
          </Route>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Routes>
      </Router>
    </VStack>
  );
}


export default App;
