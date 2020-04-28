import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages.map(m => <Messages message={m.message} key={m.id}/>);
  let newMessageText = state.newMessageText;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText)
  }
  if (!props.isAuth) return <Redirect to={'/login'}/>

  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
        </div>
        <AddMessageForm onSubmit={addNewMessage}/>
      </div>
  )
}



export default Dialogs;