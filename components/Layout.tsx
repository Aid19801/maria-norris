import React, { ReactNode } from "react";
import Head from "next/head";
import Nav from "./Nav";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMainContext } from "../context/main";
import { Modal } from "./Modal";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "Funk-27 | Politics, Dystopia, Comedy, Tech.",
}: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isLoading } = useMainContext();
  return (
    <div className="layout__container" style={{ padding: "10px" }}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Box
        className="box-yo-1"
        sx={{
          background: (theme) => theme.palette.primary.dark,
          clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
          position: "fixed",
          opacity: 0.1,
          height: 300,
          width: 300,
          transform: "skewX(2deg)",
          zIndex: -1,
        }}
      />

      <Box
        className="box-yo-2"
        sx={{
          background: (theme) => theme.palette.primary.light,
          clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
          position: "fixed",
          opacity: 0.1,
          height: 300,
          width: 300,
          transform: "skewX(154deg)",
          bottom: isMobile ? "-12%" : null,
          left: isMobile ? "4%" : null,
          right: isMobile ? null : "4%",
          zIndex: -1,
        }}
      />
      <Box
        className="box-yo-3"
        sx={{
          background: (theme) => theme.palette.secondary.dark,
          clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
          position: "fixed",
          opacity: 0.1,
          height: 300,
          width: 300,
          transform: "skewX(100deg)",
          bottom: isMobile ? "16%" : "25%",
          left: "24%",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          mb: "30px",
          maxWidth: "95vw",
          mt: "60px",

          width: " 100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLoading ? <Modal /> : children}
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
