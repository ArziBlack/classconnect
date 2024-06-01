import "./App.css";
import { VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PricingPackages from "./components/Pricing";

function App() {
  return (
    <VStack backgroundColor={`brand.page`} height={`full`} fontFamily={`Metropolis`}>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="/pricing" element={<PricingPackages/>}/>
          </Route>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;


