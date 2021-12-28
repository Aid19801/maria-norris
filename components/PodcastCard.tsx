import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { BadgeAvatar } from "./Badge";

interface PodcastCardType {
  episodeArtworkSrc: string;
  guestImgSrc: string;
  title: string;
  description: string;
  artworkAlt: string;
  descriptionLength?: number;
  firstBatch?: boolean;
}

export const PodcastCard: React.FC<PodcastCardType> = ({
  episodeArtworkSrc,
  artworkAlt,
  guestImgSrc,
  title,
  description,
  descriptionLength = 400,
  firstBatch = false,
}) => {
  return (
    <Card sx={{ minHeight: 300 }}>
      <CardMedia
        component="img"
        alt={artworkAlt}
        height="140"
        image={episodeArtworkSrc || "/poddy.png"}
        sx={{ filter: "grayscale(100%)", opacity: 0.4 }}
      />
      <CardContent sx={{pb: 0}}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="primary"
          sx={{ position: "relative" }}
        >
          {title.toLocaleLowerCase()}
          <Box sx={{ position: "absolute", bottom: "100%" }}>
            <BadgeAvatar src={guestImgSrc} height={100} width={100} />
          </Box>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 500 }}
        >
          { description.length > descriptionLength ? description.slice(0, descriptionLength) + '...' : description }
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: firstBatch ? 2 : 0}}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
