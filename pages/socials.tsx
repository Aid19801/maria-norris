import * as React from "react";
import { Box, Card, Grid, Typography, useMediaQuery } from "@mui/material";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import { BadgeAvatar } from "../components/Badge";
import Layout from "../components/Layout";
import { useMainContext } from "../context/main";
import TweetWall from "../components/TweetWall";
import TiktokWall from "../components/TiktokWall";
import InstagramWall from "../components/InstagramWall";
import { content } from "../utils/strings";

export const PageSocials: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { toggleLoading } = useMainContext();

  toggleLoading(false);

  return (
    <Layout title="F27 | Socials">
      <Head>
        <title>{content.title} - Socials</title>

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
          content={`${content.title} - Socials`}
          key="title"
        />

        <meta
          property="og:description"
          //@ts-ignore
          content={`${content.title} | Socials | ${content.description}`}
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
                src="/socials_patreonLogo.jpeg"
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
                src="/socials_twitterLogo.png"
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
                src="/socials_facebookLogo.png"
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
                src="/socials_tiktokLogo.png"
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
                src="/socials_youtubeLogo.png"
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
                src="/socials_linkedinLogo.png"
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
        <Grid item xs={12} md={4} lg={4}>
          <TiktokWall />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <TweetWall />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <InstagramWall />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default PageSocials;
