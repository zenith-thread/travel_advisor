import axios from "axios";

import { hotels } from "../../data/lodgings";
import { restaurants } from "../../data/restaurants";
import { attractions } from "../../data/attractions";

export const getPlacesData = (type) => {
  if (type === "restaurants") return restaurants;
  else if (type === "hotels") return hotels;
  return attractions;
};
