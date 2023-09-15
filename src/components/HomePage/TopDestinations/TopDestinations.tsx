import { Destination } from "../Destination/Destination";
import classes from "./classes.module.scss";
import { useDestinations } from "../../../assets/hooks/useDestinations";
import { Link } from "react-router-dom";

export const TopDestinations = () => {
  const { destinations } = useDestinations();

  return (
    <div className={["wrapper", classes.TopDestinations].join(" ")}>
      <div className="centered-title">
        <h4>Top Destination</h4>
        <h2>Discover your love</h2>
      </div>
      <div className={classes.TopDestinationsGrid}>
        {destinations.map(({ name, info, duration, id, src }) => (
          <Link to={name} target="_blank" key={id}>
            <Destination
              location={name}
              info={info}
              days={duration}
              src={src}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
