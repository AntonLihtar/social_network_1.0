import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";

//стору нужны редусеры / чтобы работать со стейтом
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendsData: friendsReducer,
    usersPage: usersReducer
})

//создаем стор// он автоматически создаст внутри стейт со свойствами из reducers
const store = createStore(reducers)

window.store = store

export default store