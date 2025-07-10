// Map.jsx
import React from "react";
import GoogleMapReact from "google-map-react";
import { Rating, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";

// Styled components
import {
  StyledMapContainer,
  StyledPaper,
  MarkerContainer,
  PointerImage,
} from "./Map.styles";

const Map = React.memo(
  ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
    const isDesktop = useMediaQuery("(min-width:600px)");

    return (
      <StyledMapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: 37.729855,
            lng: -122.476218,
          }}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={{}}
          onChange={(e) => {
            setCoordinates({
              lat: e.center.lat,
              lng: e.center.lng,
            });
            setBounds({
              ne: e.marginBounds.ne,
              sw: e.marginBounds.sw,
            });
          }}
          onChildClick={(child) => setChildClicked(child)}
        >
          {places?.map((place, index) => (
            <MarkerContainer
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={index}
            >
              {!isDesktop ? (
                <LocationOnOutlined color="primary" fontSize="large" />
              ) : (
                <StyledPaper elevation={3}>
                  <Typography variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <PointerImage
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />
                  <Rating
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                    precision={0.5}
                  />
                </StyledPaper>
              )}
            </MarkerContainer>
          ))}
        </GoogleMapReact>
      </StyledMapContainer>
    );
  }
);

export default Map;
