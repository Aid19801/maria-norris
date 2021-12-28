import * as React from "react";
import Avatar from "@mui/material/Avatar";

type BadgeAvatarProps = {
  src: string;
  height?: number;
  width?: number;
};

export const BadgeAvatar: React.FC<BadgeAvatarProps> = ({
  src,
  height = 55,
  width = 55,
}) => {
  return <Avatar alt="guest profile photo" src={src} sx={{ height, width, border: '4px solid white' }} />
};
