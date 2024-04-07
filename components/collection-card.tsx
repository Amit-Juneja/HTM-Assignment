import { Box, Button, Tooltip, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import hotels from "../data.json";
import deeptracksOne from "../public/Deep-Tracks-1.jpg";
import deeptracksTwo from "../public/Deep-Tracks-2.jpg";
import chaletmurasakiTwo from "../public/chaletmurasaki-02.jpg";
import chaletmurasakiThree from "../public/chaletmurasaki-03.jpg";
import chaletmurasaki from "../public/chaletmurasaki.jpg";

type HotelImages = {
  [key: string]: StaticImageData;
};

export const HOTELS: HotelImages =
{
  "Chalet Murasaki": chaletmurasaki,
  "Chalet Murasaki a": chaletmurasakiTwo,
  "Chalet Murasaki b": chaletmurasakiThree,
  "Deep Tracks 1": deeptracksOne,
  "Deep Tracks 2": deeptracksTwo
}

type CollectionCardProps = {
  searchQuery: string
}

export default function CollectionCard({ searchQuery }: CollectionCardProps) {
  const [showMore, setShowMore] = useState(new Array(hotels.length).fill(false));

  const toggleShowMore = (index: number) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };
  const filteredHotels = hotels.filter((hotel) => {
    return hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        scrollSnapType: "x mandatory",
        overflowX: "scroll",
      }}
    >
      {filteredHotels.length === 0 ? (
        <Typography variant="h2" sx={{ textAlign: "center", width: "100%", mt: 4 }}>
          Oops! No hotels found!
        </Typography>
      ) : (
          filteredHotels.map((hotel, key) => {
            return (
              <Box
                key={key}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  scrollSnapAlign: "start",
                  pl: 2.5,
                  pr: 2.5,
                  flexBasis: "33%",
                  pb: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "self-start",
                  }}
                >
                  <Tooltip
                    title={
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `Hotel Code: ${hotel.code}<br />
                          Property Type ID: ${hotel.propertyTypeId}<br />
                          Grade Id: ${hotel.gradeId}<br />
                          Location Id: ${hotel.locationId}<br />
                          Accomodation Type Id: ${hotel.accomTypeId}<br />
                          Hotel Id: ${hotel.viewId}<br />
                          Lift Distance ID: ${hotel.liftDistanceId}<br />
                          Village Distance Center ID: ${hotel.villageCentreDistanceId}`
                        }}
                      />
                    }
                    arrow
                  >
                    <Typography variant="body2">
                      {hotel.name}
                    </Typography>
                  </Tooltip>
                </Box>
                <Tooltip
                  title={
                    <span
                      dangerouslySetInnerHTML={{
                        __html: `Hotel Code: ${hotel.code}<br />
                          Property Type ID: ${hotel.propertyTypeId}<br />
                          Grade Id: ${hotel.gradeId}<br />
                          Location Id: ${hotel.locationId}<br />
                          Accomodation Type Id: ${hotel.accomTypeId}<br />
                          Hotel Id: ${hotel.viewId}<br />
                          Lift Distance ID: ${hotel.liftDistanceId}<br />
                          Village Distance Center ID: ${hotel.villageCentreDistanceId}`
                      }}
                    />
                  }
                  arrow
                >
                  <Image
                    src={HOTELS[hotel.name]}
                    width={200}
                    height={200}
                    alt="collection_image"
                    style={{ width: "max-content" }}
                  />
                </Tooltip>
                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left"
                }}>
                  <Typography variant="h1">{hotel.bathrooms} {hotel.bathrooms > 1 ? "Bathrooms" : "Bathroom"} {hotel.kitchenId && "1 Kitchen"}</Typography>
                  {/* List of Amenities */}
                  {showMore[key] && (
                    <>
                      <Typography variant="h1">Amenities:{hotel.amenities.aircon ? "Aircon" : ""} {hotel.amenities.appletv ? " Apple TV" : ""} {hotel.amenities.btspeakers ? " BTS Speakers" : ""} {hotel.amenities.cardkey ? " Card Key" : ""} {hotel.amenities.chromecast ? " ChromeCast" : ""} {hotel.amenities.fireplace ? " FirePlace" : ""} {hotel.amenities.hdtv ? " HD TV" : ""} {hotel.amenities.jacuzzi ? " Jacuzzi" : ""} {hotel.amenities.nespresso ? " Nespresso" : ""} </Typography>
                      <Typography variant="h1">Room Status: {hotel.status}</Typography>
                      <Typography variant="h1">Floor Area: {hotel.floorArea} sqm</Typography>
                      <Typography variant="h1">Standard Passengers Count: {hotel.standardPax}</Typography>
                      <Typography variant="h1">Maximum Passengers Count: {hotel.maximumPax}</Typography>
                      {hotel.upgradedFacilities &&
                        <Typography variant="h1">Note: We provide Upgraded facilities for this room</Typography>
                      }
                      <Typography key={key} variant="h1">Total number of bed configurations: {hotel.bedConfigurations.length}</Typography>
                      {hotel.bedConfigurations.map((configuration, key) => {
                        return (
                          <Typography key={key} variant="h1">{configuration} beds</Typography>
                        )
                      })}
                    </>
                  )}
                  <Typography variant="h1">Hotel Description:</Typography>
                  <Typography variant="body1">{hotel.description}</Typography>
                  {!showMore[key] && (
                    <Button onClick={() => toggleShowMore(key)} sx={{
                      textAlign: "left",
                      justifyContent: "flex-start",
                      p: 0,
                      color: "blue",
                      textTransform: "none"
                    }}>Show more</Button>
                  )}
                  {showMore[key] && (
                    <Button onClick={() => toggleShowMore(key)} sx={{
                      textAlign: "left",
                      justifyContent: "flex-start",
                      p: 0,
                      color: "blue",
                      textTransform: "none"
                    }}>Show less</Button>
                  )}
                </Box>
              </Box>
            );
          })
      )}
      </Box>
  );
}
