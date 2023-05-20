import { createStore } from "redux";
import rootReducer from "./reducer/Main";
const store = createStore(rootReducer);

export default store;