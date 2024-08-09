import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../redux/actions/postActions';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
    };
    addPost(newPost);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Body</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default connect(null, { addPost })(PostForm);
