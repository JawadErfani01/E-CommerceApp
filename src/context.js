import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [Search, setSearch] = useState("");
  const [CardData, setCardData] = useState([]);
  const [userList, setuserList] = useState([]);
  const [Light, setLight] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setLoading(false);
        setCardData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Search by name
  // const searchCardData = (val) => {
  //   setSearch(val);
  // };
  // useEffect(() => {
  //   if (Search === "") {
  //     setLoading(true);
  //     axios.get(`https://restcountries.com/v2/all`).then((response) => {
  //       setLoading(false);
  //       setCardData(response.data);
  //     });
  //   } else {
  //     setLoading(true);
  //     axios
  //       .get(`https://restcountries.com/v2/name/${Search}`)
  //       .then((response) => {
  //         setLoading(false);
  //         setCardData(response.data);
  //       });
  //   }
  // }, [Search]);
  return (
    <AppContext.Provider
      value={{
        loading,
        Search,
        CardData,
        setSearch,
        setuserList,
        userList,
        // searchCardData,
        Light,
        setLight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
