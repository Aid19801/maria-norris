import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { useMainContext } from "../context/main";
import { Box, Typography } from "@mui/material";

const IndexPage = () => {
  const { isLoading, toggleLoading, pages } = useMainContext();

  toggleLoading(false);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Box
        sx={{
          height: "90vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // border: "1px solid red",
          mt: "-17px",
          ml: "-25px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h1">Funk-</Typography>
          <Typography variant="h1" sx={{ color: "orange", fontWeight: "bold" }}>
            27
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ color: "lightgrey" }}>
          Discontent Providers
        </Typography>
      </Box>
    </Layout>
  );
};

export default IndexPage;
