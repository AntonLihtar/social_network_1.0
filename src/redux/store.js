import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

const store = {
    _state: {
        profilePages: {
            posts: [
                {id: 1, message: "Hello , this is 1 message", likesCount: 10},
                {id: 2, message: "Post #2 good", likesCount: 33},
                {id: 3, message: "Post #3", likesCount: 5},
                {id: 4, message: "Post 4 goodbye", likesCount: 18},
            ],
            newPostText: "helloText",
        },
        dialogPages: {
            dialogs: [
                {
                    id: 1,
                    name: "Dimich",
                    imgPath: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"
                },
                {
                    id: 2,
                    name: "Anton",
                    imgPath: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"
                },
                {
                    id: 3,
                    name: "Ehor",
                    imgPath: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"
                },
                {
                    id: 4,
                    name: "Vanya",
                    imgPath: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"
                },
                {
                    id: 5,
                    name: "Petrosyan",
                    imgPath: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"
                },
            ],
            messages: [
                {id: 1, text: "Привет Ваня как дела?"},
                {id: 2, text: "Салют, здоров как бык, сегодня выиграл лотерею! Ты как,"},
                {id: 3, text: "У меня Все здорово! "},
                {id: 4, text: "Чем занят?"}
            ],
            newMessageBody: ""
        },
        friendsData: {
            friends: [
                {id: 1, name: "Vanya", img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"},
                {id: 2, name: "Ehor", img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"},
                {id: 3, name: "Denis", img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"},
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed ')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePages = profileReducer(this._state.profilePages, action)
        this._state.dialogPages = dialogsReducer(this._state.dialogPages, action)
        this._state.friendsData = friendsReducer(this._state.friendsData, action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store