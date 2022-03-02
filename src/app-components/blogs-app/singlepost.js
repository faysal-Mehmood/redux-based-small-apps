import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Postauthor from './author';
import Reactions from './reactions';
import Timeage from './timeago';

export const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <Timeage timestamp={post.date} /> <Postauthor userId={post.userId} />
        </div>
        <p className="post-content">{post.content}</p>
        <Reactions post={post} />
        <Link to={`/edit/${post.id}`} className="button muted-button">
          edit Post
        </Link>
      </article>
    </section>
  );
};
