const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  dialogs: [
    {name: "Sergey", id: "1"},
    {name: "Ksenia", id: "2"},
    {name: "Andrey", id: "3"},
    {name: "Victor", id: "4"},
    {name: "Sveta", id: "5"},
    {name: "Oleg", id: "6"},
  ],
  messages: [
    {id: "1", message: "Hi"},
    {id: "2", message: "Yo"},
    {id: "3", message: "Yep"},
    {id: "4", message: "Yep"},
    {id: "5", message: "Yep"}
  ]
}

const dialogsReducer = (state = initialState, action) => {

  let stateCopy = {
    ...state
  }

  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageText
      return {
        ...state,
        messages: [...state.messages, {id: "6", message: body}]
      }
    }
    default:
      return state
  }
}

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})


export default dialogsReducer;