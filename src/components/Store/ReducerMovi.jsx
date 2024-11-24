import { createContext, useEffect, useState } from "react";

export const MoviContext = createContext();

const ReducerMovi = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [fetchError, setFetchError] = useState(false);
  const [submitValue, setSubmitValue] = useState("fight");
  //   const [searchValue, setSearchValue] = useState();
  const [moviType, setMoviType] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const url = ` https://www.omdbapi.com/?s=${submitValue}&type=${moviType}&y=${year}&apikey=7861b94f`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === "False") {
          console.log("THIS IS THE ERROR MESSAGE", data.error);
          setLoading(true);
          return;
        } else {
          setApiData(data.Search);
          setLoading(false);
        }
      } catch (error) {
        setLoading(true);
        console.log("This Is the Error ", error);
      }
    }
    getData();
  }, [submitValue, moviType, year]);

  console.log("THIS IS THE DATA I AM GETTING", apiData);
  console.log("THIS IS THE LOADINGGGGGGGGGGGGGGGGGGG I AM GETTING", loading);

  return (
    <>
      <MoviContext.Provider
        value={{
          apiData,
          setSubmitValue,
          submitValue,
          moviType,
          setMoviType,
          year,
          setYear,
          loading,
        }}
      >
        {children}
      </MoviContext.Provider>
    </>
  );
};

export default ReducerMovi;
