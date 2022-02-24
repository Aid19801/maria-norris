import React, { ReactElement } from "react";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import { content } from "../utils/strings";

export function Footer(): ReactElement {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <React.Fragment>
      <Grid container spacing={2} sx={{ bgcolor: "white" }}>
        <Grid item xs={12}>
          <Box>
            <Link href="/">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  ml: 2,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "5vh",
                    marginTop: 0,
                    marginBottom: 0,
                    color: (theme) => theme.palette.secondary.main,
                    fontWeight: 400,
                  }}
                >
                  {content.title}
                </Typography>
              </Box>
            </Link>
          </Box>

          <Divider sx={{ my: 2 }} />
        </Grid>
        <Grid item xs={4} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {content.footer.linksLeft.map((each) => (
              <Link key={each.link} href={each.link}>
                <a target="_blank">
                  <Typography sx={{ color: "darkgrey", fontWeight: 300 }}>
                    {each.text}
                  </Typography>
                </a>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={4} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {content.footer.linksCenter.map((each) => (
              <Link key={each.link} href={each.link}>
                <a target="_blank">
                  <Typography sx={{ color: "darkgrey", fontWeight: 300 }}>
                    {each.text}
                  </Typography>
                </a>
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={4} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {content.footer.linksRight.map((each) => (
              <Link key={each.link} href={each.link}>
                <a target="_blank">
                  <Typography sx={{ color: "darkgrey", fontWeight: 300 }}>
                    {each.text}
                  </Typography>
                </a>
              </Link>
            ))}
          </Box>
        </Grid>

        {isDesktop && (
          <Grid item md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
              }}
            >
              <Typography variant="h3" sx={{ color: "rgb(219 214 214)" }}>
                {content.description}
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
}

export default Footer;
