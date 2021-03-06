import { combineReducers,createStore,applyMiddleware } from "redux";
import { LoadUser, loginRes, RegisterUser } from "./Reducer/Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const reducer = combineReducers({

    RegisterUser:RegisterUser,
    loginRes:loginRes,
    LoadUser:LoadUser
})




const intialState = {



}

const middlelware =[thunk]


const store = createStore(

    reducer,
    intialState,
  composeWithDevTools(
    applyMiddleware(...middlelware)
  )

)

export default store;