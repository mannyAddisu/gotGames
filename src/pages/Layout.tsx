import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={4}>
        <Outlet />
        <Analytics />
      </Box>
    </>
  );
};

export default Layout;
