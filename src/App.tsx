import "./App.css";
import { Text, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <VStack backgroundColor={`brand.page`} height={`full`}>
      <Login/>
    </VStack>
  );
}

export default App;
