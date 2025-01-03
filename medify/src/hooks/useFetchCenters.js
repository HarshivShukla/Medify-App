import { useEffect, useState } from "react";
import axios from "axios";

const useFetchCenters = (state, city) => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (state && city) {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
        );
        setCenters(response.data);
      }
    };
    fetchData();
  }, [state, city]);

  return centers;
};

export default useFetchCenters;