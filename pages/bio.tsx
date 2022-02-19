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

export const BioPage = () => {
  const { toggleLoading } = useMainContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  toggleLoading(false);
  return (
    <Layout title="Bio">
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
            <Typography variant="h1">Bio</Typography>
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
        </Grid>
        <Grid item xs={12} md={6}>
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
              src={content.about_img_1}
            />
            <Typography
              variant="body1"
              fontFamily="monospace"
              fontSize={10}
              // width={isMobile ? "80%" : "50%"}
              color="secondary"
              mt={2}
              textAlign={isMobile ? "center" : "left"}
            >
              {content.title} has featured on
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
                      onClick={() => window.open(each.link, "_blank")}
                    />
                  </div>
                );
              })}
            </Box>
          </Box>
        </Grid>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column-reverse" : "row",
            marginTop: isMobile ? "inherit" : "30px",
            paddingLeft: isMobile ? "40px" : "inherit",
            paddingTop: isMobile ? "40px" : "inherit",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            alignItems="center"
            sx={{ mt: isMobile ? 5 : "inherit" }}
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
                width={400}
                src={content.about_img_2}
              />
              <Typography
                variant="body1"
                fontFamily="monospace"
                fontSize={10}
                // width={isMobile ? "80%" : "50%"}
                color="secondary"
                mt={2}
                textAlign={isMobile ? "center" : "left"}
              >
                The Enemies Of The People podcast
              </Typography>
            </Box>
            {!isMobile && <Divider sx={{ my: 2 }} />}
          </Grid>
          <Grid item xs={12} md={6} alignItems="center">
            <Typography
              variant="body1"
              sx={{
                fontSize: isMobile ? 30 : 40,
                color: "secondary.dark",
                mb: 2,
                px: isMobile ? null : 4,
              }}
            >
              {content.about_para_2}
            </Typography>
          </Grid>
        </div>
        <Grid item xs={12} alignItems="center">
          <MuiDivider right prim />
        </Grid>

        <Grid item xs={12} md={6} alignItems="center">
          <Typography
            variant="body1"
            sx={{
              fontSize: isMobile ? 30 : 20,
              color: "darkgrey",
              px: isMobile ? "30px" : 7,
              py: isMobile ? "50px" : 7,
              mb: isMobile ? "30px" : "inherit",
              textAlign: isMobile ? "center" : "inherit",
            }}
          >
            {content.about_para_3}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          alignItems="center"
          sx={{
            mb: isMobile ? "50px" : "inherit",
            pt: isMobile ? "0px !important" : "inherit",
          }}
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
              // layout="fill"
              height={350}
              width={500}
              src={content.about_img_3}
            />
            <Typography
              variant="body1"
              fontFamily="monospace"
              fontSize={10}
              // width={isMobile ? "80%" : "50%"}
              color="secondary"
              mt={2}
              textAlign={isMobile ? "center" : "left"}
            >
              BBC Newsnight
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default BioPage;
