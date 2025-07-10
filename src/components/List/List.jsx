// List.jsx
import React, { useState } from "react";
import {
  CircularProgress,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";

// components
import PlaceDetails from "../PlaceDetails/PlaceDetails";

// Styled components
import { Container, StyledFormControl, Loading, ListGrid } from "./List.styles";

const List = React.memo(({ places }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Restaurants, Hotels & Attractions around you
      </Typography>

      <StyledFormControl>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </StyledFormControl>

      <StyledFormControl>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </StyledFormControl>
      <ListGrid container spacing={3}>
        {places?.map((place, index) => (
          <Grid key={index} size={{ xs: 12 }}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </ListGrid>
    </Container>
  );
});

export default List;
