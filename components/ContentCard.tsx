import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { BadgeAvatar } from "./Badge";
import { useMainContext } from "../context/main";
import { content } from "../utils/strings";
import Image from "next/image";

interface ContentCardType {
  backgroundArtworkSrc: string;
  profileImgSrc: string;
  title: string;
  description: string;
  artworkAlt: string;
  descriptionLength?: number;
}

export const ContentCard: React.FC<ContentCardType> = ({
  backgroundArtworkSrc,
  artworkAlt,
  profileImgSrc,
  title,
  description,
  descriptionLength = 400,
}) => {
  return (
    <Card sx={{ minHeight: 300 }}>
      <Box>
        <CardMedia
          component="img"
          alt={artworkAlt}
          height="140"
          image={backgroundArtworkSrc || "/poddy.png"}
          sx={{ filter: "grayscale(100%)", opacity: 0.4 }}
        />
        <CardContent sx={{ pb: 0 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="primary"
            sx={{ position: "relative" }}
          >
            {title.toLocaleLowerCase()}
            <Box sx={{ position: "absolute", bottom: "100%" }}>
              <BadgeAvatar src={profileImgSrc} height={100} width={100} />
            </Box>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: 500 }}
          >
            {description.length > descriptionLength
              ? description.slice(0, descriptionLength) + "..."
              : description}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            mt: 2,
            px: 2,
            pb: 2,
          }}
        >
          {content.podcast_links.map(({ link, platform }) => {
            return (
              <a
                className="hover-line"
                key={platform}
                onClick={() => window.open(link, "_blank")}
              >
                <Image
                  className="rounded"
                  alt={`${platform} podcast`}
                  height={40}
                  width={40}
                  src={`/${platform}.png`}
                />
              </a>
            );
          })}
        </Box>
      </Box>
    </Card>
  );
};
