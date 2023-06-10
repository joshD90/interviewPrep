export type FormContent = {
  content: Map<string, { error: string; content: string }>;
  error: string;
};

export type ActionType = {
  type: string;
  payload: { fieldName: string; fieldValue: string };
};

export const formReducer = (
  state: FormContent,
  action: ActionType
): FormContent => {
  switch (action.type) {
    case "text": {
      const updatedState = new Map(state.content);
      if (action.payload.fieldValue === "") {
        updatedState.set(action.payload.fieldName, {
          error: "Can't be Left Blank",
          content: "",
        });
        return { error: "", content: updatedState };
      }
      updatedState.set(action.payload.fieldName, {
        error: "",
        content: action.payload.fieldValue,
      });
      return { error: "", content: updatedState };
    }

    case "password": {
      const updatedState = new Map(state.content);
      if (action.payload.fieldValue === "") {
        updatedState.set(action.payload.fieldName, {
          error: "Can't be Left Blank",
          content: "",
        });
        return { error: "", content: updatedState };
      }
      if (action.payload.fieldValue.length < 10) {
        updatedState.set(action.payload.fieldName, {
          error: "Longer than 10 characters",
          content: action.payload.fieldValue,
        });
        return { error: "", content: updatedState };
      }
      updatedState.set(action.payload.fieldName, {
        error: "",
        content: action.payload.fieldValue,
      });
      return { error: "", content: updatedState };
    }
    default:
      return state;
  }
};
