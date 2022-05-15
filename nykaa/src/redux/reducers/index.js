import { combineReducers } from "redux";
import { addCart } from "../action/productActions";
import { productsReducer, selectedProductsReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  add:addCart,
});
export default reducers;