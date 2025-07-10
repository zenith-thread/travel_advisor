import axios from "axios";

import { placesTypes } from "../App";

export const getPlacesData = async (type) => {
  if (type === placesTypes.restaurants) {
    const { restaurants } = await import("../../data/restaurants");
    return restaurants;
  } else if (type === placesTypes.hotels) {
    const { hotels } = await import("../../data/lodgings");
    return hotels;
  } else {
    const { attractions } = await import("../../data/attractions");
    return attractions;
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    console.log("GETTING LAT AND LONG IN API: ", lat, lng);
    const { data } = await axios.get(
      "https://open-weather13.p.rapidapi.com/latlon",
      {
        params: {
          latitude: lat,
          longitude: lng,
        },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_WEATHER_RAPIDAPI_KEY,
          "x-rapidapi-host": "open-weather13.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
