import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState(" ");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.92401326056221&lng=77.61405061930418&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search Items"
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-icon"
            onClick={() => {
              handleFilter();
            }}
          >
            <FaSearch />
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            handleClick();
            console.log("button clicked");
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((res) => (
          <Link className="res-list" key={res.info.id} 
                to={"/restaurants/" + res.info.id}>
                <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
