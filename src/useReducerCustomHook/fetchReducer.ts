export type FetchActions = "FETCH_START" | "FETCH_ERROR" | "FETCH_SUCCESS";
export type FetchState = {
  error: string;
  loading: boolean;
  data: object | null;
};

export type Action =
  | { type: "FETCH_START"; payload: null }
  | { type: "FETCH_ERROR"; payload: string }
  | { type: "FETCH_SUCCESS"; payload: object };

export const fetchReducer = (state: FetchState, action: Action) => {
  switch (action.type) {
    case "FETCH_START":
      return { loading: true, error: "", data: null };

    case "FETCH_ERROR":
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    case "FETCH_SUCCESS":
      return { loading: false, data: action.payload, error: "" };
    default:
      return state;
  }
};
