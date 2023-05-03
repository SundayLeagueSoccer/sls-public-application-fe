import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setPending(false);
      setError(null);
    } catch (error: any) {
      const message = error.message ? error.message : "Something went wrong";
      setError(message);
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, pending, error };
};

export default useFetch;
