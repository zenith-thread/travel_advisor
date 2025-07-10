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

import mapStyles from "./map.constants";

const Map = React.memo(
  ({
    setCoordinates,
    setBounds,
    coordinates,
    places,
    setChildClicked,
    weatherData,
  }) => {
    const isDesktop = useMediaQuery("(min-width:600px)");

    console.log({ weatherData });

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
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: mapStyles,
          }}
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
          {weatherData?.coord?.lat && weatherData?.weather?.[0] && (
            <div
              lat={weatherData.coord.lat}
              lng={weatherData.coord.lon}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <img
                src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="Weather icon"
                style={{ width: 40, height: 40 }}
              />
              <Typography variant="caption" color="white">
                {(weatherData.main.temp - 273.15).toFixed(1)}°C
              </Typography>
            </div>
          )}
        </GoogleMapReact>
      </StyledMapContainer>
    );
  }
);

export default Map;
