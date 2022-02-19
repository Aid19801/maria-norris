import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import { useMainContext } from "../context/main";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { MuiDivider } from "../components/MuiDivider";
import ContactForm from "../components/ContactForm";
import Head from "next/head";
import { content } from "../utils/strings";
import { BadgeAvatar } from "../components/Badge";
import Link from "next/link";
import Image from "next/image";

export const SpeakingPage = () => {
  const { toggleLoading, isLoading } = useMainContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [hasSent, setHasSent] = React.useState(false);
  const [err, setError] = React.useState(null);
  toggleLoading(false);

  return (
    <Layout title="Speaking">
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
          content="Maria W Norris - Speaker"
          key="title"
        />

        <meta
          property="og:description"
          //@ts-ignore
          content={content.speaking.para_1}
          key="description"
        />
        <meta
          property="og:image"
          content={content.meta.mainOgImage}
          key="Dr Maria W Norris"
        />
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1">Speaking</Typography>
          </Box>
        </Grid>
        <MuiDivider left />
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
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
              width={550}
              src={content.speaking.main_img}
            />
            <Typography
              variant="body1"
              fontFamily="monospace"
              fontSize={10}
              color="secondary"
              mt={2}
              textAlign={isMobile ? "center" : "left"}
            >
              {content.title} at University of Coventry.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginTop: isMobile ? 4 : "inherit", p: 4 }}
        >
          <Typography variant="body1" fontSize={30} color="secondary">
            {content.speaking.para_1}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          flexDirection="column"
          sx={{ mt: 6, mb: 6 }}
        >
          <Typography sx={{ textAlign: "center" }}>
            Get in touch via{" "}
            <Link href="/contact">
              <a style={{ color: "grey" }}>Contact</a>
            </Link>{" "}
            or{" "}
            <a style={{ color: "grey" }} href={content.socials[0].link}>
              Twitter
            </a>{" "}
            for your event or broadcast.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} display="flex" alignItems="stretch">
        {content.speaking.rowOfImgs.map((each) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  borderRadius: 25,
                  width: "100%",
                  height: isMobile ? "270px" : "250px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  src={each.img}
                  height={isMobile ? 400 : 200}
                  width={280}
                />

                <Typography
                  variant="body1"
                  fontFamily="monospace"
                  fontSize={10}
                  // width={isMobile ? "80%" : "50%"}
                  color="secondary"
                  mt={2}
                  textAlign="center"
                >
                  {each.text}
                </Typography>
              </Box>
            </Grid>
          );
        })}

        <Grid item xs={12} sm={6} md={3}>
          <Link href="/contact">
            <Box
              sx={{
                borderRadius: 25,
                width: "100%",
                maxHeight: "240px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <Image
                src="/book_me.png"
                height={isMobile ? 400 : 200}
                width={280}
                className="bookMe__img"
              />

              <Box
                className="bookMe__textContainer"
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  className="bookMe__text"
                  variant="body1"
                  fontFamily="monospace"
                  fontSize={10}
                  // width={isMobile ? "80%" : "50%"}
                  color="secondary"
                  // mt={2}
                  textAlign="center"
                >
                  Book Me For Your Event / Broadcast Here
                </Typography>
              </Box>
            </Box>
          </Link>
        </Grid>

        {/* <Grid item xs={12} md={3}>
          <Box sx={{ borderRadius: 25, padding: 2, border: "1px solid red" }}>
            Byline
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ borderRadius: 25, padding: 2, border: "1px solid red" }}>
            Some Podcast
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box sx={{ borderRadius: 25, padding: 2, border: "1px solid red" }}>
            Somrthing else
          </Box>
        </Grid> */}
      </Grid>
    </Layout>
  );
};

export default SpeakingPage;
