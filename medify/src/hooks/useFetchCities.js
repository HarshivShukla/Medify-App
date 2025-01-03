import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCities } from "../redux/slices/citySlice";

const useFetchCities = (state) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (state) {
      dispatch(fetchCities(state));
    }
  }, [state, dispatch]);
};

export default useFetchCities;