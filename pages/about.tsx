import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import { useMainContext } from "../context/main";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { MuiDivider } from "../components/MuiDivider";
import Head from "next/head";
import { content } from "../utils/strings";

const asSeenOnImgs = [
  "https://cdn-radiotime-logos.tunein.com/s17569g.png",
  "https://icon-library.com/images/bbc-icon/bbc-icon-14.jpg",
  "https://thegrumpydads.files.wordpress.com/2020/11/full-design.jpg?w=1024",
  "https://www.ytas.org.uk/wp-content/uploads/2019/04/fringe-logo.jpg",
  "https://www.chortle.co.uk/images/photos/small/leicester-square-theatre.jpg",
  "https://www.logo-designer.co/wp-content/uploads/2017/04/2017-huffpost-new-logo-design-2.png",
];

export const AboutPage = () => {
  const { toggleLoading } = useMainContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  toggleLoading(false);
  return (
    <Layout title="About">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={content.meta.mainOgImage} />
        <meta
          name="twitter:creator"
          content={content.meta.twitterSiteCreator}
        />
        <meta name="twitter:site" content={content.meta.twitterSite} />

        <meta
          property="og:title"
          //@ts-ignore
          content="About"
          key="title"
        />

        <meta
          property="og:description"
          //@ts-ignore
          content={content.description}
          key="description"
        />

        <meta
          property="og:image"
          content={content.meta.mainOgImage}
          key="Dr Maria W Norris"
        />
      </Head>

      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // textAlign: isMobile ? "center" : "start",
            }}
          >
            <Typography variant="h1">About</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? 30 : 40,
              color: "darkgrey",
              px: isMobile ? null : 4,
            }}
          >
            {content.about_para_1}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? 15 : 20,
              color: "secondary.dark",
              mb: 2,
              px: isMobile ? null : 4,
            }}
          >
            {content.about_para_2}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? 15 : 20,
              color: "secondary.dark",
              mb: 2,
              px: isMobile ? null : 4,
            }}
          >
            {content.about_para_3}
          </Typography>

          <MuiDivider left />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              className="rounded-corners"
              alt={`${content.title} profile picture`}
              height={600}
              width={900}
              src="/me_lg.jpeg"
            />
            <Typography
              variant="body1"
              fontFamily="monospace"
              fontSize={10}
              width={isMobile ? "80%" : "80%"}
              color="secondary.dark"
              mt={1}
              textAlign="left"
            >
              {content.title} has contributed to Academia, Media and Govt
              advisory initiatives.
            </Typography>
          </Box>

          <MuiDivider right prim />

          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? 15 : 20,
              color: "white",
              p: 2,
              mt: 2,
              bgcolor: "darkgrey",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? 15 : 20,
              color: "black",
              bgcolor: "lightgrey",
              padding: 2,
              mt: 2,
            }}
          >
            But also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} alignItems="center">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              className="rounded-corners"
              alt={content.title}
              height={400}
              width={400}
              src="/me_med.jpeg"
            />
            <Typography
              variant="body1"
              fontFamily="monospace"
              fontSize={10}
              width={isMobile ? "80%" : "50%"}
              color="secondary"
              mt={2}
              textAlign={isMobile ? "center" : "left"}
            >
              {content.title}
            </Typography>
            <Box
              sx={{
                width: isMobile ? "100%" : "70%",
                py: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              {content.as_seen_on.map((each) => {
                return (
                  <div className="hover-line" key={each.name}>
                    <Image
                      className="rounded grey-border hover-fade"
                      alt={each.name}
                      height={50}
                      width={50}
                      src={each.logo}
                    />
                  </div>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AboutPage;
