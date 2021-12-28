import { Box, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
type DividerProps = {
  prim?: boolean;
};

export const MuiDivider: React.FC<DividerProps> = ({ prim = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
          transform: "rotate(-4deg)",
          padding: isMobile ? 2 : 1,
        }}
      />
    </Box>
  );
};
