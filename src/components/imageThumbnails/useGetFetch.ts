import { useEffect, useState } from "react";

const useGetFetch = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (!response.ok) throw new Error(response.status.toString());

        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error)
          return setError(
            `There was an error in fetching the data with message of ${error.message}`
          );
        console.log(error);
      }
    })();
  }, [url]);

  return { error, data };
};

export default useGetFetch;
