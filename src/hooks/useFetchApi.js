import { useState, useEffect } from 'react';

const useFetchApi = (API) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use an AbortController to prevent memory leaks
    // This is a very good practice for a resume project
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(API, { signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // You want .json(), not .text()!
        const json = await response.json();
        setData(json);
      } catch (e) {
        if (e.name !== 'AbortError') {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to abort fetch on unmount
    return () => {
      controller.abort();
    };
  }, [API]); // Re-run the hook if the API url changes

  // Return state as an object
  return { data, loading, error };
};

export default useFetchApi;