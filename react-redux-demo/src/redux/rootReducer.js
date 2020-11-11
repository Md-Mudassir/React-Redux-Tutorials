import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import chocoReducer from "./chocolate/chocoReducer";
import userReducer from "./user/userReducer";
import postReducer from "./posts/postReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  choco: chocoReducer,
  post: postReducer,
});

export default rootReducer;
