const initialState = {
    friends: [
        {id: 1, name: "Vanya", img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"},
        {id: 2, name: "Ehor", img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"},
        {id: 3, name: "Denis", img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"},
    ]
}

const friendsReducer = (state = initialState, action) => {
    return state
}

export default friendsReducer
