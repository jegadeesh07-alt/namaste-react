# this is jegadeesh !

https://corsproxy.io/?url=https://example.com

  useEffect(() => {
    fetchMenu();
  }, []);


  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.92401326056221&lng=77.61405061930418&restaurantId=5934&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data)
  };

  const {name, cuisines, costForTwoessage} = resInfo?.cards[0]?.cards?.cards?.info

  # Redux Toolkit 
   - Install @reduxjs/toolkit and react-redux
   - Build our store 
   - Connect our store to our app
   - Slice (cartSlice)
   - dispatch (action)
   - selector

   # Types of testing (developer)
    - Unit Testing
    - Integration Testing
    - End To End Testing 

   # Setting up testing in our app
    - Installed React Testing Library
    - Installed Jest
    - Installed Babel dependensies
    - Configure Babel
    - Configure parcel config file to disable default Babel transpilation
    - Jest Configuration
    - created by - npx create-jest
    - Install jsdom Library
    - Install @babel/preset-react - to make JSX work in test cases
    - Includes @babel/preset-react inside my babel config
    - Install @testing-library/jest-dom 
