import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Rating,
} from "@mui/material";
import { LocationOn, Phone } from "@mui/icons-material";

// Styled components
import { StyledChip, Subtitle, Spacing } from "./PlaceDetails.styles";

const PlaceDetails = React.memo(({ place, selected, refProp }) => {
  useEffect(() => {
    if (selected && refProp?.current) {
      refProp.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selected, refProp]);

  return (
    <Card elevation={6} ref={refProp}>
      <CardMedia
        sx={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>

        {place?.awards?.map((award, index) => (
          <Box
            key={index}
            my={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <StyledChip key={name} size="small" label={name} />
        ))}

        {place?.address && (
          <Subtitle variant="subtitle2" color="textSecondary">
            <LocationOn sx={{ mr: 1 }} />
            {place.address}
          </Subtitle>
        )}

        {place?.phone && (
          <Spacing variant="subtitle2" color="textSecondary">
            <Phone sx={{ mr: 1 }} />
            {place.phone}
          </Spacing>
        )}

        <CardActions>
          {place?.web_url && (
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.web_url, "_blank")}
            >
              Trip Advisor
            </Button>
          )}
          {place?.website && (
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.website, "_blank")}
            >
              Website
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
});

export default PlaceDetails;
