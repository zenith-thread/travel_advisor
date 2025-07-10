// Header.styles.jsx
import { styled, alpha } from "@mui/material/styles";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  height: "40px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

export const StyledInputBase = styled("input")(({ theme }) => ({
  color: "black",
  width: "100%",
  height: "100%",
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `35px`,
  border: "none",
  outline: "none",
  color: "white",
  background: "transparent",
  fontSize: "1rem",
  [theme.breakpoints.up("md")]: {
    width: "20ch",
  },
}));
