import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

//стору нужны редусеры / чтобы работать со стейтом
const reducers = combineReducers({
    profilePages: profileReducer,
    dialogPages: dialogsReducer,
    friendsData: friendsReducer
})

//создаем стор// он автоматически создаст внутри стейт со свойствами из reducers
const store = createStore(reducers)

export default store