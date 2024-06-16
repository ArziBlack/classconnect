import { VStack } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./AppContent";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <VStack height="full" fontFamily="Metropolis">
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </VStack>
  );
}

export default App;
