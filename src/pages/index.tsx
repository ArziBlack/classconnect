import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, useDisclosure } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import SignInModal from "./Login";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    if (location.pathname === "/signin") {
      onOpen();
    } else {
      onClose();
    }
  }, [location, onOpen, onClose]);

  const closeModal = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <Box as="main" px={{ base: "4", md: "16" }}>
        <Outlet />
      </Box>
      <SignInModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default Layout;
