import React from "react";
import { Box, CircularProgress, LinearProgress } from "@mui/material";

export const Modal = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: "rgba(0, 0, 0, 0.2)",
        position: "absolute",
        top: 24,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearProgress sx={{ width: "70%" }} />
    </Box>
  );
};
