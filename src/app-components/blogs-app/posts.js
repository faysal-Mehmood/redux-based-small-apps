import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { totolposts } from '../../store/reducer/posts/post';
import Postauthor from './author';
import Reactions from './reactions';
import Timeage from './timeago';
export const PostsList = () => {
  const posts = useSelector(totolposts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  console.log('posts', orderedPosts);
  const renderedPosts = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        {/* <PostAuthor userId={post.user} /> */}
        <Timeage timestamp={post.date} /> <Postauthor userId={post.userId} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Reactions post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
