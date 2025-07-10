// Map.styles.js
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const StyledMapContainer = styled("div")({
  height: "85vh",
  width: "100%",
});

export const StyledPaper = styled(Paper)({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
});

export const MarkerContainer = styled("div")({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": {
    zIndex: 2,
  },
});

export const Pointer = styled("div")({
  cursor: "pointer",
});
