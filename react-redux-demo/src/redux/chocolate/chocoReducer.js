import { BUY_CHOCO } from "./chocoTypes";

const ChocoState = {
  numOfChoco: 30,
};

const chocoReducer = (state = ChocoState, action) => {
  switch (action.type) {
    case BUY_CHOCO:
      return {
        ...state,
        numOfChoco: state.numOfChoco - 1,
      };

    default:
      return state;
  }
};

export default chocoReducer;
