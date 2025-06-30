import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

  }, []);

  return { data, error, loading };
};
