import * as React from "react";
import Layout from "../components/Layout";
import { useMainContext } from "../context/main";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import { content } from "../utils/strings";

const IndexPage = () => {
  const { toggleLoading } = useMainContext();
  const [showBrand, setShowBrand] = React.useState<boolean>(false);
  toggleLoading(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowBrand(true);
    }, 1000);
  }, []);
  return (
    <Layout title={content.title}>
      <Head>
        <title>{content.title}</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/shedShot.png" />
        <meta name="twitter:creator" content="@aidThompsin" />
        <meta name="twitter:site" content="@aidThompsin" />

        <meta property="og:title" content={content.title} key="title" />

        <meta
          property="og:description"
          content={`${content.title} | Home | ${content.description}`}
          key="description"
        />

        <meta
          property="og:image"
          content="/podcast_studio1.jpg"
          key="funk27 podcast microphone"
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
          <Typography
            variant="h1"
            sx={{
              transition: "300ms",
              opacity: showBrand ? 1 : 0,
            }}
          >
            Dr&nbsp;
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: (theme) => theme.palette.secondary.light,
              fontWeight: "bold",
              transition: "600ms",
              opacity: showBrand ? 1 : 0,
            }}
          >
            Maria Norris
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: "lightgrey",
            transition: "900ms",
            opacity: showBrand ? 1 : 0,
          }}
        >
          {content.description}
        </Typography>
      </Box>
    </Layout>
  );
};

export default IndexPage;
