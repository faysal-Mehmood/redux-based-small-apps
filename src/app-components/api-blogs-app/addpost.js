import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewPost } from '../../store/reducer/ApiPost/post';

export const AddPostForm = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setuserId] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setuserId(e.target.value);
  const AddNewPost = () => {
    if (title && content) {
      dispatch(addNewPost(title, content, userId));
      setTitle('');
      setContent('');
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const authors = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {authors}
        </select>
        <button type="button" onClick={AddNewPost} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};
