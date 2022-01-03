import React, { ReactElement } from "react";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@mui/material/styles";
// import styles from "./footer.module.scss";
import Link from "next/link";
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import { MuiDivider } from "./MuiDivider";

export interface Props {
  darkMode: boolean;
}

// CONTENT
const footerLinksRight = [
  {
    text: "Podcast Home",
    link: "/podcast",
  },
  {
    text: "YouTube - AT // OD",
    link: "https://www.youtube.com/adrianthompsoncomedy",
  },
  {
    text: "Apple Podcasts - AT // OD",
    link: "https://podcasts.apple.com/gb/podcast/aid-thompsin-other-disappointments/id1543205608",
  },
  {
    text: "Spotify - AT // OD",
    link: "https://open.spotify.com/show/6mrjI8ZioqWgcHpNIBa3uU?si=1af543a5fb78456b",
  },
  {
    text: "Blog Home",
    link: "/blog",
  },
];

// MY SOCIALS
const footerLinksCenter = [
  {
    text: "Patreon - @AidThompsin",
    link: "https://patreon.com/aidthompsin",
  },
  {
    text: "Facebook - @AidThompsin",
    link: "https://www.facebook.com/aidThompsin",
  },
  {
    text: "Twitter - @AidThompsin",
    link: "https://twitter.com/aidthompsin",
  },
  {
    text: "Github - @AidThompsin",
    link: "https://github.com/aid19801",
  },
];

// FUNK 27 CORP
const footerLinksLeft = [
  {
    text: "Email Us",
    link: "/contact",
  },
  {
    text: "About Us",
    link: "/about",
  },
  {
    text: "Facebook - Funk-27",
    link: "https://www.facebook.com/funkTwentySeven",
  },
  {
    text: "Linkedin - Funk-27",
    link: "https://www.linkedin.com/company/funk-27",
  },
];
export function Footer({ darkMode }: Props): ReactElement {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const handleClick = (location: string) => {
    let str = "";

    switch (location) {
      case "facebook":
        str = "https://www.facebook.com/funkTwentySeven";
        break;

      case "twitter":
        str = "https://www.twitter.com/aidThompsin";
        break;

      case "linkedin":
        str = "https://www.linkedin.com/company/funk-27";
        break;

      case "email":
        window.location.href =
          "mailto:aidThompsin@gmail.com" + "&subject='email_website_query'";
        break;

      default:
        return;
    }
    return window.open(str);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          p: 2,
        }}
      >
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
                  marginLeft: 0,
                  marginBottom: 0,
                  color: "grey",
                  fontWeight: 400,
                }}
              >
                F
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "5vh",
                  marginTop: 0,
                  marginBottom: 0,
                  color: "orange",
                  fontWeight: 400,
                }}
              >
                27
              </Typography>
            </Box>
          </Link>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              px: 2,
              width: isDesktop ? "50%" : "90%",
              // border: "1px solid red",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {footerLinksLeft.map((each) => (
                <Link href={each.link}>
                  <Typography sx={{ color: "darkgrey", fontWeight: 300 }}>
                    {each.text}
                  </Typography>
                </Link>
              ))}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {footerLinksCenter.map((each) => (
                <Link href={each.link}>
                  <Typography sx={{ color: "darkgrey", fontWeight: 300 }}>
                    {each.text}
                  </Typography>
                </Link>
              ))}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {footerLinksRight.map((each) => (
                <Link href={each.link}>
                  <Typography sx={{ color: "darkgrey", fontWeight: 300 }}>
                    {each.text}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              visibility: isDesktop ? "inherit" : "hidden",
              px: 2,
              width: isDesktop ? "50%" : "0%",
              // border: "1px solid red",
            }}
          >
            <Typography variant="h3" sx={{ color: "rgb(219 214 214)" }}>
              Discontent Providers
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Footer;
