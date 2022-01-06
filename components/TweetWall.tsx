import * as React from "react";
import { Box, Card, Button, Divider, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import Link from "next/link";
import Image from "next/image";

interface EachTiktokProps {
  text: string;
  retweets: string;
  likes: string;
  urlToTweet: string;
}
export const EachTweet: React.FC<EachTiktokProps> = ({
  text,
  retweets,
  likes,
  urlToTweet,
}) => {
  return (
    <Link href={urlToTweet}>
      <a target="_blank" className="twitter__link">
        <Box className="twitter__wrapper" sx={{ mb: 2 }}>
          <>
            <Box
              className="twitter__tweetContainer"
              sx={{
                display: "flex",
                flexDirection: "row",
                // border: "1px solid green",
              }}
            >
              {/* profile pic and name */}
              <Box
                className="twitter__profilePicName"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  // border: "1px solid blue",
                }}
              >
                <Image
                  className="twitter__img"
                  src="/me.jpeg"
                  alt="aid thompsin twitter"
                  height="50"
                  width="50"
                />
                <Typography
                  sx={{ color: "lightgrey", fontSize: 12, textAlign: "center" }}
                >
                  @aidThompsin
                </Typography>
              </Box>

              {/* main body */}

              <Box
                className="twitter__textContainer"
                sx={{ display: "flex", flexDirection: "column", p: 1 }}
              >
                <Typography
                  variant="body1"
                  color="secondary"
                  fontFamily="Arial"
                  sx={{ fontSize: 12 }}
                >
                  {text}
                </Typography>
                <Box
                  className="twitter__stats"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{ fontSize: 11 }}
                    >
                      {retweets}&nbsp;
                    </Typography>
                    <Image
                      src="/retweet.png"
                      height={12}
                      width={12}
                      alt="retweet icon"
                    />
                    &nbsp;
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{ fontSize: 11 }}
                    >
                      {likes}&nbsp;
                    </Typography>
                    <Image
                      src="/love.png"
                      height={12}
                      width={12}
                      alt="retweet icon"
                    />
                    &nbsp;
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider sx={{}} />
          </>
        </Box>
      </a>
    </Link>
  );
};

export const TweetWall: React.FC = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "flex-start",
          //   padding: 2,
        }}
      >
        <h1
          style={{
            fontFamily: "Helvetica",
            fontWeight: 300,
            fontSize: 21,
            margin: 0,
          }}
        >
          Tweets
        </h1>
        <p
          style={{
            fontFamily: "Helvetica",
            fontWeight: 300,
            fontSize: 12,
            margin: 0,
          }}
        >
          &nbsp; by
        </p>
        <a
          href="https://www.tiktok.com/@aidthompsin"
          target="_blank"
          style={{
            fontFamily: "Helvetica",
            fontWeight: 300,
            fontSize: 12,
            textDecoration: "none",
            color: "#2b7bb9",
          }}
        >
          &nbsp; @aidThompsin
        </a>
      </Box>
      <Divider sx={{ mt: 2, mb: 2 }} />

      <EachTweet
        text="*Boris Johnson crashes 18-wheeler of toxic chemicals into a childrens ward* - DAN HODGES: Another Perfect & Churchillian Performance From Boris Johnson."
        retweets="16"
        likes="159"
        urlToTweet="https://twitter.com/aidThompsin/status/1478751045815783443"
      />

      <EachTweet
        text="PornHub asked me what my fantasy is but they don’t have a category for “being totally free of responsibility for three fucking days, Jesus Christ”"
        retweets="2"
        likes="6"
        urlToTweet="https://twitter.com/aidThompsin/status/1478243726980001793"
      />

      <EachTweet
        text="Lol @NoelGallagher criticising Labour for not being working class” is the new “Oxbridge Telegraph Journalist Railing Against The Establishment"
        retweets="2"
        likes="8"
        urlToTweet="https://twitter.com/aidThompsin/status/1475933797459841035"
      />

      <Button
        onClick={() => window.open("https://twitter.com/aidthompsin")}
        variant="contained"
        color="primary"
        sx={{ width: "100%" }}
      >
        View more on Twitter
      </Button>
    </Card>
  );
};

export default TweetWall;
