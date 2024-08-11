import styles from "./styles.module.css";

function CityCard({ city }) {
  if (!city) {
    return null;
  }

  return (
    <div className={styles.cityContainer}>
      <img className={styles.cityImage} src={city.imageUrl} alt={city.name} />
      <h2 className={styles.cityName}>{city.name}</h2>
      <p className={styles.cityDescription}>{city.description}</p>
      <ul className={styles.cityList}>
        {city.facts.map((fact) => (
          <li className={styles.cityListItems} key={fact}>
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
