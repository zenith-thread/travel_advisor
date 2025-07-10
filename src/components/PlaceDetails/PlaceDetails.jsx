import React from "react";

const PlaceDetails = React.memo(({ place }) => {
  return <div>{place.name}</div>;
});

export default PlaceDetails;
