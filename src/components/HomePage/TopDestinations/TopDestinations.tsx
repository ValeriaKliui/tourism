import { Destination } from "../Destination/Destination";
import classes from "./classes.module.scss";
import { useDestinations } from "../../../assets/hooks/useDestinations";

export const TopDestinations = () => {
  const { destinations } = useDestinations();

  return (
    <div className={["wrapper", classes.TopDestinations].join(" ")}>
      <div className={classes.Titles}>
        <h4>Top Destination</h4>
        <h2>Discover your love</h2>
      </div>
      <div className={classes.TopDestinationsGrid}>
        {destinations.map(({ name, info, duration, id, src }) => (
          <Destination
            key={id}
            location={name}
            info={info}
            days={duration}
            src={src}
          />
        ))}
      </div>
    </div>
  );
};
