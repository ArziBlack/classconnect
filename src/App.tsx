import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Pricing from "./pages/Pricing";
import { VStack } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/index";

function App() {
  return (
    <VStack
      height={`full`}
      fontFamily={`Metropolis`}
      backgroundColor={`brand.page`}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signin" element={null} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;
