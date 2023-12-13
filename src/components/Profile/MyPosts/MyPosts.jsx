import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators"
import {FormControl, Textarea} from "../../common/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
    return (
      <div>
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field component={FormControl}
                     child="textarea"
                     placeholder={"post messages"}
                     name="post"
                     validate={[requiredField, maxLength10]}
              />
          </div>
          <div>
              <button>add post</button>
          </div>
      </form>
      </div>
    )
}

const PostReduxForm = reduxForm({
    // a unique name for the form
    form: 'postForm'
})(PostForm)


const MyPosts = (props) => {

    const onSubmit = (postData) => {
        console.log(postData.post)
        props.addPost(postData.post)
    }

    return (
      <div className={classes.content}>
          <div>
              <h3>My posts</h3>

              <PostReduxForm onSubmit={onSubmit}/>

              <div className={classes.posts}>
                  {props.posts.map(post => (
                    <Post
                      key={post.id}
                      message={post.message}
                      likesCount={post.likesCount}
                    />
                  ))}
              </div>
          </div>
      </div>
    );
};

export default MyPosts;