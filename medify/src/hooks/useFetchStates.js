import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStates } from "../redux/slices/stateSlice";

const useFetchStates = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);
};

export default useFetchStates;