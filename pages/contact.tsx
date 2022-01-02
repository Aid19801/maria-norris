import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import Layout from "../components/Layout";
import { useMainContext } from "../context/main";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { MuiDivider } from "../components/MuiDivider";
import { BadgeAvatar } from "../components/Badge";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  const { toggleLoading, isLoading } = useMainContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [hasSent, setHasSent] = React.useState(false);
  const [err, setError] = React.useState(null);
  toggleLoading(false);
  return (
    <Layout title="Funk-27 | Contact">
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
              <Button
                sx={{ mt: 3 }}
                variant="contained"
                color="secondary"
                onClick={() => window.open("https://twitter.com/aidthompsin")}
              >
                Try Twitter?
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ContactPage;
