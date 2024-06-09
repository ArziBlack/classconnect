import "./App.css";
import { VStack } from "@chakra-ui/react";
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

import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import VerifyAccount from "./pages/VerifyEmail";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <VStack backgroundColor="brand.page" height="full" fontFamily="Metropolis">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signin" element={<Home />} />
            <Route path="register" element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="courses" element={<Courses />}>
              <Route index element={<AllCourses />} />
              <Route path="kindergarten" element={<Kindergarten />} />
              <Route path="college" element={<College />} />
              <Route path="high-school" element={<HighSchool />} />
              <Route path="computer" element={<Computer />} />
              <Route path="science" element={<Science />} />
              <Route path="engineering" element={<Engineering />} />
            </Route>
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="reset" element={<ResetPassword />} />
          <Route path="verify" element={<VerifyAccount />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;