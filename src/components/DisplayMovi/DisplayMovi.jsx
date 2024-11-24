import { useContext } from "react";
import { MoviContext } from "../Store/ReducerMovi";
import styles from "./DisplayMovi.module.css";

const DisplayMovi = () => {
  const { apiData } = useContext(MoviContext);
  return (
    <>
      <div className={styles.container}>
        {apiData.map((movi) => (
          <div className={styles.sub_container} key={movi.imdbID}>
            <img src={movi.Poster} alt="image" />
            <h4>{movi.Title}</h4>
            <div className={styles.info_container}>
              <h4>{movi.Type}</h4>
              <h4>{movi.Year}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayMovi;
