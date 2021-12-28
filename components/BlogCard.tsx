import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grow } from "@mui/material";
import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  comments?: number;
  imgSrc: string;
  imgAlt?: string;
  categoryImgSrc: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  date,
  comments = 0,
  imgSrc,
  imgAlt = "political dystopia blog artwork",
  categoryImgSrc,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Link href="/blog/:id" as={`/blog/${slug}`}>
      <Grow in>
        <Card>
          <CardMedia component="img" height="194" image={imgSrc} alt={imgAlt} />
          <CardHeader
            // avatar={
            //   <Avatar
            //     alt="political commentary profile"
            //     src={categoryImgSrc}
            //     aria-label="category signifier"
            //     sx={{ height: 55, width: 55, border: "4px solid white" }}
            //   />
            // }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
            subheader={new Date(date).toString().slice(0, 16).trim()}
          />
        </Card>
      </Grow>
    </Link>
  );
};
