import * as React from "react";
import {
  Grid,
  Box,
  Card,
  Typography,
  useMediaQuery,
  Alert,
  Grow,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import Head from "next/head";
import { useMainContext } from "../context/main";
import TrollBoardForm from "../components/TrollBoardForm";

const COMMENTS_API = "https://trollboard-api.herokuapp.com";

const FONTS = ["monospace", "Arial", "Oswald", "CURSIVE"];
const COLORS = [
  "rgba(245, 247, 156, 0.4)",
  "rgba(204, 229, 245, 0.6)",
  "rgba(245, 206, 204, 0.6)",
  "rgba(241, 204, 245, 0.7)",
];

const PageTrollboard: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [comments, setAllComments] = React.useState<
    null | { id: string; text: string; user: string }[]
  >(null);
  //   const [text, setText] = React.useState<string>("");
  //   const [name, setName] = React.useState<string>("");
  const [error, setError] = React.useState<null | string>(null);
  const { toggleLoading } = useMainContext();

  const handleSubmit = async (name, text) => {
    toggleLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer fuck off you twat`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("user", name);
    urlencoded.append("text", text);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    // @ts-ignore
    fetch("http://localhost:5000/comment", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        if (json.status === 200) {
          toggleLoading(false);
          setError(null);
          setTimeout(() => {
            fetchAllComments();
          }, 300);
        }
      })
      .catch((error) => {
        console.log("error ", error);
        toggleLoading(false);
        setError("Oh no, a problem occurred - try later or tweet @aidThompsin");
      });
  };

  const fetchAllComments = async () => {
    toggleLoading(true);
    try {
      const res = await fetch(`${COMMENTS_API}/comments`);
      const json = await res.json();
      setAllComments(json.comments.reverse());
      toggleLoading(false);
    } catch (error) {
      setAllComments(null);
      setError(
        "A problem has occurred - please try later or tweet @aidThompsin"
      );
      toggleLoading(false);
    }
  };
  React.useEffect(() => {
    fetchAllComments();
  }, []);
  React.useEffect(() => {
    console.log("comments back ", comments);
  }, [comments]);

  return (
    <>
      <Layout title="Funk-27 | Trollboard">
        <Head>
          <title>F27 | Trollboard</title>

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/shedShot.png" />
          <meta name="twitter:creator" content="@aidThompsin" />
          <meta name="twitter:site" content="@aidThompsin" />

          <meta
            property="og:title"
            content={`Funk-27 | Trollboard`}
            key="title"
          />

          <meta
            property="og:description"
            content="Gotta problem with the way I do things? Or how I look? Well, Buster Brown, you can just go ahead and put it on this whiteboard to make me cry."
            key="description"
          />

          <meta
            property="og:image"
            content="/podcast_studio1.jpg"
            key="funk27 podcast microphone"
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
              <Typography variant="h1">Trollboard</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Box
                  className="whiteboard"
                  sx={{
                    overflow: "scroll",
                    width: isMobile ? "100%" : "70%",
                    height: isMobile ? "50vh" : "500px",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "25px",
                    bgcolor: "grey",
                    position: "relative",
                    contain: "content",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {comments &&
                    comments.map((each, i) => {
                      const randomTransformNumber = Math.round(
                        -19 + Math.random() * 30
                      );
                      return (
                        <Box
                          key={each.text}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              p: 4,
                              borderRadius: 25,
                              color: "black",
                              transform: `rotate(${randomTransformNumber}deg)`,
                              fontSize: isMobile
                                ? `${Math.round(10 + Math.random() * 12)}px`
                                : `${Math.round(9 + Math.random() * 22)}px`,
                              background: COLORS[Math.round(Math.random() * 3)],
                              fontFamily: FONTS[i] || "Arial",
                            }}
                          >
                            {each.text}
                            <br />
                            <strong> - {each.user}</strong>
                          </Typography>
                        </Box>
                      );
                    })}
                </Box>

                {error && (
                  <Grow in>
                    <Alert variant="outlined" color="warning" sx={{ mt: 2 }}>
                      {error}
                    </Alert>
                  </Grow>
                )}
                <TrollBoardForm onSubmit={handleSubmit} />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default PageTrollboard;
