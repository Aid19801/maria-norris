import * as React from "react";
import { Box, Card, Grid, Typography, useMediaQuery } from "@mui/material";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import { BadgeAvatar } from "../components/Badge";
import Layout from "../components/Layout";
import { useMainContext } from "../context/main";
import TweetWall from "../components/TweetWall";
import TiktokWall from "../components/TiktokWall";

export const PageSocials: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { toggleLoading } = useMainContext();

  toggleLoading(false);

  return (
    <Layout title="F27 | Socials">
      <Head>
        <title>F27 | Get @ Me</title>

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:image" //@ts-ignore
          content="/shedShot.png"
        />
        <meta name="twitter:creator" content="@aidThompsin" />
        <meta name="twitter:site" content="@aidThompsin" />

        <meta
          property="og:title"
          //@ts-ignore
          content={`Funk-27 | Discontent Providers`}
          key="title"
        />

        <meta
          property="og:description"
          //@ts-ignore
          content="Get in touch or follow us on other platforms to get full exposure to upcoming Podcasts, chat Politics, or muse over the future of Media and Tech. Or the weather. The weather is fine, also."
          key="description"
        />

        <meta
          property="og:image"
          //@ts-ignore
          content="/shedShot.png"
          key="seo share image"
        />
      </Head>

      <Typography
        variant="h1"
        color="secondary"
        sx={{
          mb: 5,
          lineHeight: 1,
          // fontFamily: "monospace",
          color: (theme) => theme.palette.secondary.light,
          fontSize: isDesktop ? 200 : 110,
        }}
      >
        Socials
      </Typography>

      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
        >
          <Card
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: isDesktop ? "row" : "column",
              justifyContent: "space-between",
              alignItems: isDesktop ? "flex-start" : "center",
              p: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <BadgeAvatar
                externalLink="https://www.patreon.com/aidThompsin"
                height={isDesktop ? 90 : 140}
                width={isDesktop ? 90 : 140}
                src="https://p.kindpng.com/picc/s/122-1225463_patreon-new-patreon-logo-transparent-hd-png-download.png"
              />
              <Typography
                variant="body1"
                fontFamily="monospace"
                sx={{
                  color: "darkgrey",
                  textAlign: "center",
                  mb: isDesktop ? 0 : 3,
                  fontSize: isDesktop ? 12 : 30,
                }}
              >
                @aidThompsin
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <BadgeAvatar
                externalLink="https://twitter.com/aidthompsin"
                height={isDesktop ? 90 : 140}
                width={isDesktop ? 90 : 140}
                src="https://www.freeiconspng.com/uploads/logo-twitter-circle-png-transparent-image-1.png"
              />
              <Typography
                variant="body1"
                fontFamily="monospace"
                sx={{
                  color: "darkgrey",
                  textAlign: "center",
                  mb: isDesktop ? 0 : 3,
                  fontSize: isDesktop ? 12 : 30,
                }}
              >
                @aidThompsin
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <BadgeAvatar
                externalLink="https://facebook.com/aidthompsin"
                height={isDesktop ? 90 : 140}
                width={isDesktop ? 90 : 140}
                src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"
              />
              <Typography
                variant="body1"
                fontFamily="monospace"
                sx={{
                  color: "darkgrey",
                  textAlign: "center",
                  mb: isDesktop ? 0 : 3,
                  fontSize: isDesktop ? 12 : 30,
                  maxWidth: isDesktop ? 120 : 225,
                }}
              >
                Aid Thompsin Comedy & Podcast
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <BadgeAvatar
                externalLink="https://www.tiktok.com/@aidthompsin"
                height={isDesktop ? 90 : 140}
                width={isDesktop ? 90 : 140}
                src="http://assets.stickpng.com/images/5cb78671a7c7755bf004c14b.png"
              />
              <Typography
                variant="body1"
                fontFamily="monospace"
                sx={{
                  color: "darkgrey",
                  textAlign: "center",
                  mb: isDesktop ? 0 : 3,
                  fontSize: isDesktop ? 12 : 30,
                }}
              >
                @aidThompsin
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <BadgeAvatar
                externalLink="https://www.youtube.com/adrianthompsonComedy"
                height={isDesktop ? 90 : 140}
                width={isDesktop ? 90 : 140}
                src="https://www.pngitem.com/pimgs/m/11-114700_youtube-red-circle-youtube-circle-icon-png-transparent.png"
              />
              <Typography
                variant="body1"
                fontFamily="monospace"
                sx={{
                  color: "darkgrey",
                  textAlign: "center",
                  mb: isDesktop ? 0 : 3,
                  fontSize: isDesktop ? 12 : 30,
                  maxWidth: isDesktop ? 120 : 225,
                }}
              >
                Aid Thompsin & Other Disappointments Podcast
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <BadgeAvatar
                externalLink="https://www.linkedin.com/company/funk-27"
                height={isDesktop ? 90 : 140}
                width={isDesktop ? 90 : 140}
                src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
              />
              <Typography
                variant="body1"
                fontFamily="monospace"
                sx={{
                  color: "darkgrey",
                  textAlign: "center",
                  mb: isDesktop ? 0 : 3,
                  fontSize: isDesktop ? 12 : 30,
                }}
              >
                Funk-27 (Business Page)
              </Typography>
            </Box>
          </Card>
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <TweetWall />
        </Grid> */}
        <Grid item xs={12} md={4} lg={3}>
          <TiktokWall />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PageSocials;
