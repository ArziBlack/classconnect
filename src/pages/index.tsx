import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, useDisclosure } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import SignInModal from "./Login";
import Footer from "../components/Footer";
import RegisterModal from "./Register";

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
  }, [location, onSignInOpen, onSignInClose, onRegisterOpen, onRegisterClose]);

  const closeSignInModal = () => {
    navigate(-1);
    onSignInClose();
  };

  const closeRegisterModal = () => {
    navigate(-1);
    onRegisterClose();
  };

  return (
    <>
      <Navbar />
      <Box as="main" px={{ base: "4", md: "16" }}>
        <Outlet />
      </Box>
      <Footer />
      <SignInModal isOpen={isSignInOpen} onClose={closeSignInModal} />
      <RegisterModal isOpen={isRegisterOpen} onClose={closeRegisterModal} />
    </>
  );
};

export default Layout;
