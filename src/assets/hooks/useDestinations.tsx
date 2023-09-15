import { fetchDestinations } from "../../features/destinations/fetchDestinations";
import { useAppDispatch, useAppSelector } from "./hooks";

export const useDestinations = () => {
  const destinations = useAppSelector(
    (state) => state.destinations.destinations
  );
  const error = useAppSelector((state) => state.destinations.error);
  const loading = useAppSelector((state) => state.destinations.loading);
  const dispatch = useAppDispatch();
  const setDestinations = () => dispatch(fetchDestinations());
  return { destinations, setDestinations, error, loading };
};
