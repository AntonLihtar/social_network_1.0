import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk  from 'redux-thunk'

//стору нужны редусеры / чтобы работать со стейтом
const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendsData: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

//создаем стор// он автоматически создаст внутри стейт со свойствами из reducers
const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store