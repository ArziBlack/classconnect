import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, useDisclosure } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import SignInModal from "./Login";
import Footer from "../components/Footer";
import RegisterModal from "./Register";
import NewsletterSection from "../components/NewsletterSection";
import AdmissionBanner from "../components/AdmissionBanner";
import ApplyModal from "./TutorRegisteration";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    isOpen: isSignInOpen,
    onOpen: onSignInOpen,
    onClose: onSignInClose,
  } = useDisclosure();
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();
  const {
    isOpen: isApplyOpen,
    onOpen: onApplyOpen,
    onClose: onApplyClose,
  } = useDisclosure();

  React.useEffect(() => {
    if (location.pathname === "/signin") {
      onSignInOpen();
    } else {
      onSignInClose();
    }

    if (location.pathname === "/register") {
      onRegisterOpen();
    } else {
      onRegisterClose();
    }
    if (location.pathname === "/apply") {
      onApplyOpen();
    } else {
      onApplyClose();
    }
  }, [
    location,
    onSignInOpen,
    onSignInClose,
    onRegisterOpen,
    onRegisterClose,
    onApplyOpen,
    onApplyClose,
  ]);

  const closeSignInModal = () => {
    navigate(-1);
    onSignInClose();
  };

  const closeRegisterModal = () => {
    navigate(-1);
    onRegisterClose();
  };

  const closeApplyModal = () => {
    navigate(-1);
    onApplyClose();
  };

  return (
    <Box display={`flex`} flexDir={`column`} w={`full`}>
      <AdmissionBanner />
      <Navbar />
      <Box as="main">
        <Outlet />
      </Box>
      <NewsletterSection />
      <Footer />
      <SignInModal isOpen={isSignInOpen} onClose={closeSignInModal} />
      <RegisterModal isOpen={isRegisterOpen} onClose={closeRegisterModal} />
      <ApplyModal isOpen={isApplyOpen} onClose={closeApplyModal} />
    </Box>
  );
};

export default Layout;
