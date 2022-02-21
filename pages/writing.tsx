import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import { useMainContext } from "../context/main";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { MuiDivider } from "../components/MuiDivider";
import Head from "next/head";
import { content } from "../utils/strings";
import Link from "next/link";
import Image from "next/image";
import { DoubleArrow } from "@mui/icons-material";

const ctaBtnStyles = {
  py: 1,
  px: 2,
  minWidth: 150,
  border: "3px solid black",
  borderRadius: 24,
  bgcolor: "darkgrey",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "300ms",
  marginTop: 2,
  "&:hover": {
    background: "pink",
  },
  "&:nth-child(1)": {
    marginTop: 0,
  },
  "> p": {
    color: "white",
  },
};
export const WritingPage = () => {
  const { toggleLoading, isLoading } = useMainContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  toggleLoading(false);

  return (
    <Layout title="Writing">
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
          content="Writing"
          key="title"
        />

        <meta
          property="og:description"
          //@ts-ignore
          content={content.writing.para_1}
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
            <Typography variant="h1">Writing</Typography>
          </Box>
        </Grid>
        <MuiDivider left prim />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: isMobile ? 30 : 40,
                color: "secondary.dark",
                mb: 2,
                px: isMobile ? null : 4,
              }}
            >
              {content.writing.para_1}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={content.writing.main_img_lg}
              alt="blogging"
              height={400}
              width={600}
            />
          </Box>
        </Grid>
        <MuiDivider right />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: isMobile ? "column" : "row",
            marginBottom: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              background: "pink",
              transform: "skewY(2deg)",
              padding: 1,
              justifyContent: "center",
              alignItems: "center",
              mb: isMobile ? 4 : "inherit",
            }}
          >
            <img
              src={content.writing.rowOfImgs[3].img}
              style={{
                width: isMobile ? "90vw" : "40vw",
                filter: "drop-shadow(2px 4px 6px black)",
                height: "auto",
                marginBottom: "14px",
                background: "grey",
                transform: "skewY(-2deg)",
              }}
            />
            <Typography
              variant="body1"
              fontFamily="monospace"
              fontSize={14}
              color="white"
              textAlign={isMobile ? "center" : "left"}
              sx={{
                transform: "skewY(-2deg)",
              }}
            >
              {content.writing.rowOfImgs[3].text}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "pink",
              transform: "skewY(-2deg)",
              padding: 2,
            }}
          >
            <img
              src={content.writing.rowOfImgs[4].img}
              style={{
                width: isMobile ? "90vw" : "40vw",
                filter: "drop-shadow(2px 4px 6px black)",
                height: "auto",
                marginBottom: "14px",
                background: "grey",
                transform: "skewY(2deg)",
              }}
            />
            <Typography
              variant="body1"
              fontFamily="monospace"
              fontSize={14}
              color="white"
              textAlign={isMobile ? "center" : "left"}
              sx={{
                transform: "skewY(2deg)",
                marginBottom: "14px",
              }}
            >
              {content.writing.rowOfImgs[3].text}
            </Typography>
          </Box>
        </Box>

        <MuiDivider straight prim />

        <Grid item xs={12} sm={4} md={4} sx={{ justifyContent: "flex-start" }}>
          <Box
            sx={{
              //   border: "1px solid red",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={content.writing.rowOfImgs[0].img}
              style={{ height: "auto", width: "100%" }}
            />
            <Typography
              variant="body1"
              fontFamily="monospace"
              fontSize={14}
              // width={isMobile ? "80%" : "50%"}
              color="secondary"
              //   mt={2}
              textAlign="center"
            >
              {content.writing.rowOfImgs[0].text}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} sx={{ justifyContent: "flex-start" }}>
          <Box
            sx={{
              //   border: "1px solid red",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={content.writing.rowOfImgs[1].img}
              style={{ height: "auto", width: "100%" }}
            />
            <Typography
              variant="body1"
              fontFamily="monospace"
              fontSize={14}
              // width={isMobile ? "80%" : "50%"}
              color="secondary"
              //   mt={2}
              textAlign="center"
            >
              {content.writing.rowOfImgs[1].text}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} sx={{ justifyContent: "flex-start" }}>
          <Box
            sx={{
              //   border: "1px solid red",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={content.writing.rowOfImgs[2].img}
              style={{ height: "auto", width: "100%" }}
            />
            <Typography
              variant="body1"
              fontFamily="monospace"
              fontSize={14}
              color="secondary"
              textAlign="center"
            >
              {content.writing.rowOfImgs[2].text}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <MuiDivider straight right />

      <Grid
        container
        spacing={2}
        sx={{
          alignItems: "center",
          justifyContent: "space-evenly",
          border: "1px solid red",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              width: "100%",
              border: "1px solid pink",
            }}
          >
            <img
              src={content.writing.rowOfImgs[5].img}
              alt="andres brevik"
              height="100%"
              width="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} justifyContent="center" alignItems="center">
          <Box
            className="flex-writing-btns"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              border: "1px solid red",
              alignItems: "center",
            }}
          >
            <Link href="/speaking">
              <Box sx={ctaBtnStyles}>
                <Typography
                  variant="body1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                  }}
                >
                  Speaking
                  <DoubleArrow />
                </Typography>
              </Box>
            </Link>
            <Link href="/contact">
              <Box sx={ctaBtnStyles}>
                <Typography
                  variant="body1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    fontSize: 14,
                    width: "80%",
                    textAlign: "center",
                  }}
                >
                  get in touch
                  <DoubleArrow />
                </Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <MuiDivider straight prim />
    </Layout>
  );
};

export default WritingPage;
