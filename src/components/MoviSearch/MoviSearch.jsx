import { useContext, useState } from "react";
import { MoviContext } from "../Store/ReducerMovi";
import styles from "./MoviSearch.module.css";

const MoviSearch = () => {
  const [userValue, setUserValue] = useState("");
  const { setSubmitValue, submitValue, setMoviType, moviType, year, setYear } =
    useContext(MoviContext);

  const handelChange = (event) => {
    setUserValue(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    setSubmitValue(userValue);
    setUserValue("");
  };

  const handleChange = (event) => {
    setMoviType(event.target.value);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handelSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter The Movies Name.."
          onChange={handelChange}
          value={userValue}
        />
        <button type="submit" className={styles.btn}>
          search
        </button>
      </form>
      <div>
        <select
          id="options"
          value={moviType}
          onChange={handleChange}
          className={styles.type}
        >
          <option value="">Type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className={styles.input_year}
        />
      </div>
    </div>
  );
};

export default MoviSearch;
