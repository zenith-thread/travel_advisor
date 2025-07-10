import { CssBaseline, Grid, Box, CircularProgress } from "@mui/material";
import { Suspense, lazy, useEffect, useState } from "react";

const Header = lazy(() => import("./components/Header/Header"));
const List = lazy(() => import("./components/List/List"));
const Map = lazy(() => import("./components/Map/Map"));
const PlaceDetails = lazy(() =>
  import("./components/PlaceDetails/PlaceDetails")
);

import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: 37.729855,
    lng: -122.476218,
  });
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    const places = getPlacesData("restaurants");
    setPlaces(places);
  }, [coordinates, bounds]);
  return (
    <>
      <Suspense
        fallback={
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="#222"
            height="100vh"
          >
            <CircularProgress style={{ color: "white" }} />
          </Box>
        }
      >
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <List places={places} />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
            />
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};

export default App;
