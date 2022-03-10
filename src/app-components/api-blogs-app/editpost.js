import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { postEdit } from '../../store/reducer/posts/post';

export const EditPostForm = () => {
  const { postId } = useParams();
  const history = useHistory();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  const dispatch = useDispatch();
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const editPost = () => {
    if (title && content) {
      dispatch(postEdit({ id: postId, title, content }));
      history.push(`/posts/${postId}`);
    }
  };
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
        <button type="button" onClick={editPost}>
          update Post
        </button>
      </form>
    </section>
  );
};
