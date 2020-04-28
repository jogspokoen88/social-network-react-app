import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={'newPostText'} validate={[required, maxLength10]} />
        <button>Add</button>
      </form>
  )
}

export default reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)