import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import { useMainContext } from "../context/main";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Head from "next/head";
import { content } from "../utils/strings";

const IndexPage = () => {
  const { toggleLoading } = useMainContext();
  const [showBrand, setShowBrand] = React.useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  toggleLoading(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowBrand(true);
    }, 1000);
  }, []);

  return (
    <Layout title={content.title}>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={content.meta.mainOgImage} />
        <meta
          name="twitter:creator"
          content={content.meta.twitterSiteCreator}
        />
        <meta name="twitter:site" content={content.meta.twitterSite} />
        <meta property="og:title" content={content.title} key="title" />

        <meta name="description" content={content.home_description} />
        <meta
          property="og:description"
          content={content.description}
          key="description"
        />

        <meta
          property="og:image"
          content={content.meta.mainOgImage}
          key="Dr Maria W Norris"
        />
      </Head>
      <Box
        sx={{
          height: "90vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: "-17px",
        }}
      >
        <Box
          className="title__wrapper"
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "inherit",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              transition: "300ms",
              opacity: showBrand ? 1 : 0,
              textAlign: "center",
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
              textAlign: "center",
              opacity: showBrand ? 1 : 0,
            }}
          >
            Maria W. Norris
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: "lightgrey",
            transition: "900ms",
            textAlign: "center",
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
