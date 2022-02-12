import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import { useMainContext } from "../context/main";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useAnalytics } from "use-analytics";
import { MuiDivider } from "../components/MuiDivider";
import ContactForm from "../components/ContactForm";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Layout title="Not Found">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              mt: isMobile ? "30px" : "60px",
              // border: "1px solid red",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: (theme) => theme.palette.primary.light,
                fontWeight: 800,
                opacity: 0.5,
              }}
            >
              Oh NO!
            </Typography>
            <Typography variant="h1" sx={{ textAlign: "center" }}>
              Page Not Found
            </Typography>
            <Box
              sx={{
                width: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
                mt: 7,
              }}
            >
              <Typography variant="body1">
                Lets get you back on track...
              </Typography>

              <Box
                sx={{
                  width: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: isMobile ? "column" : "row",
                  mt: isMobile ? 1 : 7,
                }}
              >
                <Link href="/" as="/">
                  <a className="funk__btn">Home</a>
                </Link>
                <Link href="/podcast" as="/podcast">
                  <a className="funk__btn">Podcast</a>
                </Link>
                <Link href="/about" as="blog">
                  <a className="funk__btn">About</a>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
