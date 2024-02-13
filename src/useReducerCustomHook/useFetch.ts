import { useEffect, useReducer } from "react";
import { FetchState, fetchReducer } from "./fetchReducer";

const initialState: FetchState = { loading: false, error: "", data: null };

export const useFetch = (url: string) => {
  const [fetchedData, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      dispatch({ type: "FETCH_START", payload: null });
      const response = await fetch(url, { signal: abortController.signal });
      if (!response.ok)
        dispatch({ type: "FETCH_ERROR", payload: response.statusText });
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    })();

    return () => {
      abortController.abort("Component Unmounted Before Response Returned");
    };
  }, [url]);

  return fetchedData;
};
