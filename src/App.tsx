import "./App.css";
import { VStack } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./AppContent";

function App() {
  return (
    <VStack backgroundColor="brand.page" height="full" fontFamily="Metropolis">
      <Router>
        <AppContent />
      </Router>
    </VStack>
  );
}

export default App;
