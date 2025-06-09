# this is jegadeesh !

https://corsproxy.io/?url=https://example.com

  useEffect(() => {
    fetchMenu();
  }, []);


  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.92401326056221&lng=77.61405061930418&restaurantId=5934&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data)
  };

  const {name, cuisines, costForTwoessage} = resInfo?.cards[0]?.cards?.cards?.info