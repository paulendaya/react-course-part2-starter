interface Action {
  type: "INCREMENT" | "RESET"; //
}
// BASIC REDUCER

// Reducer is a function that takes in the current state and an action, and returns the new state
// Reducer purpose is to centralize the logic of how the state changes, so we can keep the state logic in one place
// To have a separation of concerns - component is for UI, and reducer is for state

const counterReducer = (state: number, action: Action) => {
  //for action, convention is to use Interface
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "RESET":
      return 0;
  }
};

export default counterReducer;
