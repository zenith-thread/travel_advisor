// PlaceDetails.styles.js
import { styled } from "@mui/material/styles";
import { Chip, Typography } from "@mui/material";

export const StyledChip = styled(Chip)({
  margin: "5px 5px 5px 0",
});

export const Subtitle = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10px",
});

export const Spacing = styled(Typography)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
