import React, { ReactNode } from "react";
import Head from "next/head";
import Nav from "./Nav";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Box
        sx={{
          marginLeft: isMobile ? "55px" : "100px",
          paddingRight: 4,
          mb: "200px",
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default Layout;
