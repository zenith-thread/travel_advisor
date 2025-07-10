import React, { useState, useEffect, createRef } from "react";
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
import {
  Container,
  StyledFormControl,
  LoadingDiv,
  ListGrid,
} from "./List.styles";

import { placesTypes } from "../../App";

const List = React.memo(
  ({
    places,
    childClicked,
    loading,
    filterLoading,
    type,
    setType,
    rating,
    setRating,
  }) => {
    const [elementRefs, setElementRefs] = useState([]);

    useEffect(() => {
      const refs = Array(places?.length)
        .fill()
        .map((_, i) => elementRefs[i] || createRef());

      setElementRefs(refs);
    }, [places]);
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Restaurants, Hotels & Attractions around you
        </Typography>

        {loading ? (
          <LoadingDiv>
            <div style={{ textAlign: "center" }}>
              <CircularProgress style={{ color: "blue" }} size={80} />
              <div style={{ marginTop: "16px", color: "#888" }}>
                Loading {type}...
              </div>
            </div>
          </LoadingDiv>
        ) : (
          <>
            <StyledFormControl>
              <InputLabel>Type</InputLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value={placesTypes.restaurants}>Restaurants</MenuItem>
                <MenuItem value={placesTypes.hotels}>Hotels</MenuItem>
                <MenuItem value={placesTypes.attractions}>Attractions</MenuItem>
              </Select>
            </StyledFormControl>

            <StyledFormControl>
              <InputLabel>Rating</InputLabel>
              <Select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
              </Select>
            </StyledFormControl>
            {filterLoading ? (
              <LoadingDiv>
                <div style={{ textAlign: "center" }}>
                  <CircularProgress style={{ color: "blue" }} size={80} />
                  <div style={{ marginTop: "16px", color: "#888" }}>
                    Finding the best {type} for you
                  </div>
                </div>
              </LoadingDiv>
            ) : (
              <ListGrid container spacing={3}>
                {places?.map((place, index) => (
                  <Grid key={index} size={{ xs: 12 }}>
                    <PlaceDetails
                      place={place}
                      selected={Number(childClicked) === index}
                      refProp={elementRefs[index]}
                    />
                  </Grid>
                ))}
              </ListGrid>
            )}
          </>
        )}
      </Container>
    );
  }
);

export default List;
