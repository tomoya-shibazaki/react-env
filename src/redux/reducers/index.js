import { combineReducers } from "redux"
import { productReducerã€€} from "./productReducer"

const reducers = combineReducers({
    allProducts: productReducer,
})

export default reducers