import * as React from "react";
import { Box, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type DividerProps = {
  prim?: boolean;
  straight?: boolean;
  right?: boolean;
  left?: boolean;
};

export const MuiDivider: React.FC<DividerProps> = ({
  prim = false,
  straight = true,
  right = false,
  left = false,
}) => {
  const [angle, setAngle] = React.useState<string>("rotate(0deg)");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    if (straight) setAngle("rotate(0deg)");
    if (right) setAngle("rotate(-4deg)");
    if (left) setAngle("rotate(+4deg)");
  }, [right, left, straight]);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: isMobile ? 4 : 6,
        mt: isMobile ? 4 : 6,
      }}
    >
      <Divider
        sx={{
          width: isMobile ? "90%" : "60%",
          bgcolor: (theme) =>
            prim ? theme.palette.primary.main : theme.palette.secondary.main,
          transform: angle,
          padding: isMobile ? 2 : 1,
        }}
      />
    </Box>
  );
};
