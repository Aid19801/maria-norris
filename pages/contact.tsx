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

export const ContactPage = () => {
  const { toggleLoading, isLoading } = useMainContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [hasSent, setHasSent] = React.useState(false);
  const [err, setError] = React.useState(null);
  toggleLoading(false);

  return (
    <Layout title="Contact">
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
          content="Get In Touch"
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
            <Typography variant="h1">Contact</Typography>
          </Box>
        </Grid>
        <MuiDivider right prim />
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: isMobile ? 350 : 500,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!hasSent && (
              <ContactForm
                hasSent={hasSent}
                setHasSent={setHasSent}
                setError={setError}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          {hasSent && !err && (
            <Typography variant="h6">Message Sent</Typography>
          )}
          {err && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">{err}</Typography>
            </Box>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Typography sx={{ textAlign: "center" }}>
            You can also get in touch via Social channels...
          </Typography>

          <Box sx={{ width: isMobile ? "70%" : "50%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                mt: 4,
              }}
            >
              {content.socials.map((each) => {
                return (
                  <Box
                    key={each.platform}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <BadgeAvatar
                      externalLink={each.link}
                      height={90}
                      width={90}
                      src={each.logo}
                    />
                    <Typography
                      variant="body1"
                      fontFamily="monospace"
                      sx={{
                        color: "darkgrey",
                        textAlign: "center",
                        mb: !isMobile ? 0 : 3,
                        fontSize: 12,
                      }}
                    >
                      {each.platform}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContactPage;
