import { CssBaseline, Grid } from "@mui/material";
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
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    const places = getPlacesData("hotels");
    setPlaces(places);
  }, [coordinates, bounds]);

  console.log(coordinates, bounds);
  return (
    <>
      <Suspense fallback={<p>Loading</p>}>
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
            />
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};

export default App;
