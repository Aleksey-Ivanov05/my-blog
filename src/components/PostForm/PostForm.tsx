import React, {useState} from 'react';
import {PostApi} from "../../types";

interface Props {
  onSubmit: (post: PostApi) => void;
  existingPost?: PostApi;
}

const PostForm: React.FC<Props> = ({onSubmit, existingPost}) => {
  const initialState = existingPost || {
    title: '',
    body: '',
    datetime: '',
  };

  const [post, setPost] = useState(initialState);

  const postChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    let datetime = post.datetime;
    if (post.datetime === '') {
      const date = new Date();
      let days = '';

      if (date.getDate() < 10) {
        days = '0' + date.getDate()
      } else {
        days = date.getDate().toString();
      }

      datetime = days + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
    }

    setPost(prevState => ({
      ...prevState,
      [name]: value,
      datetime: datetime,
    }))
  }

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(post);
  };


  return (
    <div className="border border-dark border-2 p-3 mt-2">
      <h3>{existingPost ? 'Edit post' : 'Add new post'}</h3>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" name="title" className="form-control" value={post.title} onChange={postChanged}/>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="body">Description</label>
          <textarea id="body" name="body" className="form-control" value={post.body} onChange={postChanged}/>
        </div>
        <button className="btn btn-primary mt-2" type="submit">{existingPost ? 'Save' : 'Add'}</button>
      </form>
    </div>
  );
};

export default PostForm;