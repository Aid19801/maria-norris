import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { useMainContext } from "../context/main";
import { Box, Typography } from "@mui/material";
import Head from "next/head";

const IndexPage = () => {
  const { toggleLoading } = useMainContext();
  toggleLoading(false);
  return (
    <Layout title="Funk-27 | Disconent Providers">
      <Head>
        <title>F27 | About</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/shedShot.png" />
        <meta name="twitter:creator" content="@aidThompsin" />
        <meta name="twitter:site" content="@aidThompsin" />

        <meta
          property="og:title"
          content={`Funk-27 | Disconent Providers`}
          key="title"
        />

        <meta
          property="og:description"
          content="Discontent Providers | new media platform (or web-app) serving up Podcasts and Blogs that attempt to make sense of the senseless. In a delightfully c*nty way."
          key="description"
        />

        <meta
          property="og:image"
          content="/shedShot.png"
          key="seo blog share image"
        />
      </Head>
      <Box
        sx={{
          height: "90vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
