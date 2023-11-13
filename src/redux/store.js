export const ADD_POST = "ADD_POST";
export const SET_POST_TEXT = "SET_POST_TEXT";

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
                {id: 1, author: "author", text: "Привет Ваня как дела?"},
                {id: 2, author: "Vanya", text: "Салют, здоров как бык, сегодня выиграл лотерею! Ты как,"},
                {id: 3, author: "author", text: "У меня Все здорово! "},
                {id: 4, author: "Vanya", text: "Чем занят?"}
            ]
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
        if (action.type === ADD_POST) {
            const newPost = {
                id: this._state.profilePages.posts.length + 1,
                message: this._state.profilePages.newPostText,
                likesCount: 0
            }
            this._state.profilePages.posts.push(newPost)

            this._state.profilePages.newPostText = ''
            console.log(this._state)
            this._callSubscriber(this._state)
        } else if (action.type === SET_POST_TEXT) {
            this._state.profilePages.newPostText = action.newMessage
            this._callSubscriber(this._state)
        } else
            return this._state
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const setPostMessageActionCreator = (text) => {

    return {
        type: SET_POST_TEXT,
        newMessage: text
    }
}

export default store
window.store = store