// Map.jsx
import React from "react";
import GoogleMapReact from "google-map-react";
import { Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";

// Styled components
import {
  StyledMapContainer,
  StyledPaper,
  MarkerContainer,
  Pointer,
} from "./Map.styles";

const Map = React.memo(({ setCoordinates, setBounds, coordinates }) => {
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <StyledMapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
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
        onChildClick={() => {}}
      />
    </StyledMapContainer>
  );
});

export default Map;
