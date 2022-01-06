import * as React from "react";
import { Box, Card, Button, Divider, Typography } from "@mui/material";
import ReactPlayer from "react-player";

interface EachTiktokProps {
  caption: string;
  views: string;
  likes: string;
  videoSrc: string;
}
export const EachTiktok: React.FC<EachTiktokProps> = ({
  caption,
  views,
  likes,
  videoSrc,
}) => {
  return (
    <Box className="Tiktok__wrapper" sx={{ mb: 4 }}>
      <ReactPlayer url={videoSrc} controls />
      <Typography variant="body1" color="secondary">
        {caption}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Typography variant="body1" color="primary" sx={{ fontSize: 11 }}>
          {views} views &nbsp;
        </Typography>
        <Typography variant="body1" color="primary" sx={{ fontSize: 11 }}>
          {likes} likes
        </Typography>
      </Box>
    </Box>
  );
};

export const TiktokWall: React.FC = () => {
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
          Tiktoks
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

      <EachTiktok
        caption="The Housing Crisis"
        views="607,701"
        likes="65,900"
        videoSrc="/housingCrisis.mp4"
      />
      <EachTiktok
        caption="Tories On Tiktok"
        views="52,000"
        likes="7,473"
        videoSrc="/toriesOnTiktok.mp4"
      />
      <Button
        onClick={() => window.open("https://tiktok.com/@aidthompsin")}
        variant="contained"
        color="primary"
        sx={{ width: "100%" }}
      >
        View more on Tiktok
      </Button>
    </Card>
  );
};

export default TiktokWall;
