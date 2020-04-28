import React from "react";
import friendsReducer from "./friendsReducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store;
store = {
  _state: {
    profilePage: {
      posts: [
        {message: "Yellow greenback", likeCounts: "15"},
        {message: "React Redux", likeCounts: "19"},
      ],
      newPostText: 'sergei-gurbin is react developer'
    },
    dialogsPage: {
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
      ],
      newMessageText: ""
    },
    friendsPage: {
      friends: [
        {name: "Anton", id: "1"},
        {name: "Stepan", id: "2"},
        {name: "Boris", id: "3"}
      ]
    }
  },
  _callSubscriber() {
    console.log('state changed')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsReducer = dialogsReducer(this._state.dialogsPage, action)
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action)
    this._callSubscriber(this._state)
  }
};


export default store