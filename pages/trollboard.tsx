import * as React from "react";
import {
  Grid,
  Box,
  Card,
  Typography,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Grow,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import Head from "next/head";
import { useMainContext } from "../context/main";

const COMMENTS_API = "http://localhost:5000";

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
  const [text, setText] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [error, setError] = React.useState<null | string>(null);
  const { toggleLoading } = useMainContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    // post to MongoDB

    setText("");
    setName("");
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const fetchAllComments = async () => {
    toggleLoading(true);
    try {
      const res = await fetch(`${COMMENTS_API}/comments`);
      const json = await res.json();
      setAllComments(json.comments);
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
                    width: isMobile ? "100%" : "70%",
                    height: isMobile ? "50vh" : "500px",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "25px",
                    bgcolor: "grey",
                    position: "relative",
                    contain: "content",
                  }}
                >
                  {comments &&
                    comments.map((each, i) => {
                      const randomTransformNumber = Math.round(
                        -19 + Math.random() * 30
                      );
                      return (
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            position: "absolute",
                            top: `${Math.round(Math.random() * 386)}px`,
                            left: isMobile
                              ? `${(i + 5) * 4}px`
                              : `${(i + 1) * 100}px`,
                            zIndex: 100000,
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              p: 1,
                              color: "black",
                              transform: `rotate(${randomTransformNumber}deg)`,
                              fontSize: isMobile
                                ? `${Math.round(5 + Math.random() * 12)}px`
                                : `${Math.round(9 + Math.random() * 22)}px`,
                              background: COLORS[Math.round(Math.random() * 3)],
                              fontFamily: FONTS[i] || "Arial",
                            }}
                          >
                            {each.text}
                            <br />
                            <strong>{each.user}</strong>
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
                <form
                  className="whiteboard__form"
                  style={{
                    display: "flex",
                    width: isMobile ? "100%" : "70%",
                    flexDirection: "column",
                    marginTop: 16,
                    marginBottom: 16,
                  }}
                  onSubmit={handleSubmit}
                >
                  <TextField
                    label="Your name"
                    id="trollboard__user"
                    variant="outlined"
                    value={name}
                    onChange={handleChangeName}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    id="trollboard__text"
                    label="Type trolly comments here...."
                    variant="outlined"
                    value={text}
                    onChange={handleChangeText}
                  />
                  <Button
                    disabled={text === "" || name === ""}
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2 }}
                  >
                    Submit
                  </Button>
                </form>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default PageTrollboard;
