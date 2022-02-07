import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Badge } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useMainContext } from "../context/main";
import Link from "next/link";
import { content } from "../utils/strings";

const navOptions = ["home", "about", "contact", "podcast", "academia"];

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navWidth = isMobile ? "100vw" : 320;
  const responsiveFontsize = isMobile ? "50px" : "20px";

  const { toggleLoading } = useMainContext();

  const handleRouteChange = (loc: string) => {
    toggleLoading(true);
    setIsOpen(false);
    if (loc === "home") {
      return router.push("/");
    }
    return router.push("/" + loc);
  };

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setShowOptions(true);
      }, 300);
    } else {
      setShowOptions(false);
    }
  }, [isOpen]);

  return (
    <Box sx={{ display: "flex", height: "64px", zIndex: 10000000 }}>
      <MuiAppBar
        sx={{
          py: 2,
          px: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Badge onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </Badge>
        <Link href="/">
          <Typography variant="body1">{content.title}</Typography>
        </Link>
      </MuiAppBar>
      <Box
        className="funk__drawer"
        sx={{
          mt: 5,
          transition: "0.2s ease",
          ml: "-28px",
          py: 3,
          px: isOpen ? 1 : 0,
          position: "absolute",
          top: isMobile ? "15px" : null,
          left: isMobile ? "4px" : null,
          width: isOpen ? navWidth : 0,
          contain: "content",
          height: "auto",
          zIndex: 2,
          border: isOpen ? "4px solid white" : null,
          background: (theme) => theme.palette.secondary.light,
          boxShadow: "1px 20px 26px 5px rgba(0,0,0,0.67)",
        }}
      >
        {isOpen && (
          <Link href="/">
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                ml: isMobile ? 2 : 0,
              }}
            >
              <Typography sx={{ ml: 1, mb: 2, color: "white" }} variant="h4">
                Maria&nbsp;
              </Typography>
              <Typography
                sx={{ mb: 2, color: (theme) => theme.palette.primary.main }}
                variant="h4"
              >
                Norris
              </Typography>
            </Box>
          </Link>
        )}

        <Divider light />

        <List
          component="nav"
          aria-label="mailbox folders"
          sx={{
            visibility: isOpen ? "visible" : "hidden",
            ml: isMobile ? "15px" : "-6px",
          }}
        >
          {navOptions.map((eachOption, i) => {
            return (
              <React.Fragment key={eachOption}>
                <ListItem
                  component="button"
                  onClick={() => handleRouteChange(eachOption)}
                  sx={{
                    color: isMobile ? "white" : "white",
                    background: "none",
                    border: "none",
                  }}
                >
                  <ListItemText
                    primary={eachOption}
                    sx={{
                      textAlign: isMobile ? "center" : "start",
                      "& span": {
                        transition: `${(i + 1) * 200}ms`,
                        ml: isOpen ? 0 : "-50px",
                        fontSize: isOpen ? responsiveFontsize : "100px",
                      },
                    }}
                  />
                </ListItem>
                <Divider light />
              </React.Fragment>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
