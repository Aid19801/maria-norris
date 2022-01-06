import * as React from "react";
import {
  Grid,
  Box,
  Card,
  Typography,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMainContext } from "../context/main";

export const TweetWall: React.FC = () => {
  return (
    <Card sx={{ p: 2 }}>
      <a
        className="twitter-timeline"
        href="https://twitter.com/aidThompsin?ref_src=twsrc%5Etfw"
      />
    </Card>
  );
};

export default TweetWall;
