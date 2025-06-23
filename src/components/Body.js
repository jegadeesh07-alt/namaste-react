import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.js";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState(" ");

  const ResWithPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.92401326056221&lng=77.61405061930418&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false)
    return (
      <h1>
        looks like you're in offline !! please check your internet connection
      </h1>
    );

  const handleClick = () => {
    const filteredList = listOfRestaurant.filter(
      (res) => res.info.avgRating >= 4.5
    );
    console.log(filteredList);
    setFilteredRes(filteredList);
  };

  const handleFilter = () => {
    const filteredRes = listOfRestaurant.filter((res) => {
      return res.info.name
        .trim()
        .toLowerCase()
        .includes(searchText.trim().toLowerCase());
    });
    setFilteredRes(filteredRes);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center">
        <div className="m-4 p-4 items-center ">
          <input
            type="text"
            placeholder="Search Items"
            className="mt-0.5 border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Button
            variant="text"
            className="rounded-lg px-2 py-1.5 m-2 items-center bg-green-100"
            onClick={() => {
              handleFilter();
            }}
          >
            <FaSearch />
          </Button>
        </div>
        <div className="flex items-center m-4 p-4">
          <Button
            variant="contained"
            className="px-2 mb-0.5 m-2"
            onClick={() => {
              handleClick();
              console.log("button clicked");
            }}
          >
            Top Rated Restaurant
          </Button>
          <div className="pl-4 ">
            <label>UserName : </label>
            <input
              type="text"
              value={loggedInUser}
              className="border border-black p-1.5 "
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRes.map((res) => (
          <Link
            className="res-list"
            key={res.info.id}
            to={"/restaurants/" + res.info.id}
          >
            {res.info.promoted ? (
              <ResWithPromoted />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
