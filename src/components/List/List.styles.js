// List.styles.js
import { styled } from "@mui/material/styles";
import { FormControl, Grid } from "@mui/material";

export const Container = styled("div")({
  padding: "25px",
});

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
  marginBottom: "30px",
}));

export const SelectEmpty = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const LoadingDiv = styled("div")({
  height: "600px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const MarginBottom = styled("div")({
  marginBottom: "30px",
});

export const ListGrid = styled(Grid)({
  height: "75vh",
  overflow: "auto",
});
