import "./App.css";
import { VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <VStack backgroundColor={`brand.page`} height={`full`}>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route index element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;
