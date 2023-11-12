let store = {
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

    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State was changed ')
    },
    addPost() {
        const newPost = {
            id: this._state.profilePages.posts.length + 1,
            message: this._state.profilePages.newPostText,
            likesCount: 0
        }
        this._state.profilePages.posts.push(newPost)

        this._state.profilePages.newPostText = ''
        this._callSubscriber()
    },
    setPostText(newMessage) {
        this._state.profilePages.newPostText = newMessage
        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store
window.store = store