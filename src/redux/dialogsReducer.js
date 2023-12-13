export const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
export const SEND_MESSAGE = "SEND_MESSAGE"

const initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, text: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer