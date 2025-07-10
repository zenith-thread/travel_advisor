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
