import { useState } from "react";
import styles from "./styles.module.css";

function CitySelector({ onCityChange, citiesData }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    onCityChange(event.target.value);
  };

  return (
    <div className={styles.selectContainer}>
      <h2 className={styles.selectParag}>Выберите город:</h2>
      <select
        value={selectedCity}
        onChange={handleCityChange}
        className={styles.selectChoose}
      >
        <option value={null}>Choose City</option>
        {citiesData.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
