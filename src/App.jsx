import { CssBaseline, Grid } from "@mui/material";
import { lazy, useEffect, useState } from "react";

const Header = lazy(() => import("./components/Header/Header"));
const List = lazy(() => import("./components/List/List"));
const Map = lazy(() => import("./components/Map/Map"));

// api
import { getPlacesData, getWeatherData } from "./api";

export const placesTypes = {
  restaurants: "restaurants",
  hotels: "hotels",
  attractions: "attractions",
};

const App = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({
    lat: 37.729855,
    lng: -122.476218,
  });
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);

  const [loading, setLoading] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false);

  const [type, setType] = useState(placesTypes.restaurants);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setFilterLoading(true);
    setTimeout(() => {
      const filteredPlaces = places.filter((place) => place?.rating > rating);
      setFilteredPlaces(filteredPlaces);
      setFilterLoading(false);
    }, 0);
  }, [rating]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const places = await getPlacesData(type);
      setPlaces(
        places?.filter((place) => place?.name && place?.num_reviews > 0)
      );
      setFilteredPlaces([]);
      const weatherData = await getWeatherData(
        coordinates.lat,
        coordinates.lng
      );
      setWeatherData(weatherData);
      setLoading(false);
    })();
  }, [type]);

  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const handleSearchChange = (query) => {
    if (!query.trim()) {
      setSearchSuggestions([]);
      return;
    }

    const matches = places.filter((place) =>
      place.name?.toLowerCase().includes(query.toLowerCase())
    );
    setSearchSuggestions(matches);
  };

  const handleSearchSelect = (place) => {
    if (place?.latitude && place?.longitude) {
      setCoordinates({
        lat: Number(place.latitude),
        lng: Number(place.longitude),
      });
    } else {
      console.warn("No coordinates found for selected place");
    }
    setSearchSuggestions([]);
  };

  return (
    <>
      <CssBaseline />
      <Header
        setCoordinates={setCoordinates}
        onSearchChange={handleSearchChange}
        onSearchSelect={handleSearchSelect}
        suggestions={searchSuggestions}
      />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            loading={loading}
            filterLoading={filterLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
