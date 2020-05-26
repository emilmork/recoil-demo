export type Action = {
  type: "INCREMENT";
};

type State = {
  count: number;
};

export const initialState = {
  count: 0,
} as State;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default reducer;
