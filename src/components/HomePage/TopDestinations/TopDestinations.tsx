import { Destination } from "../Destination/Destination";
import classes from "./classes.module.scss";
import { useDestinations } from "../../../assets/hooks/useDestinations";
import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

export const TopDestinations = () => {
  const { destinations, loading, error } = useDestinations();
  if (error) {
    return <></>;
  }
  return (
    <div className={["wrapper", classes.TopDestinations].join(" ")}>
      <div className="centered-title">
        <h4>Top Destination</h4>
        <h2>Discover your love</h2>
      </div>
      {loading ? (
        <ColorRing wrapperStyle={{ alignSelf: "center" }} />
      ) : (
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
      )}
    </div>
  );
};
