import React from 'react';
import Navbar from './navbar.js';
import { PostsList } from './posts.js';
import { AddPostForm } from './addpost.js';
const Index = () => {
  return (
    <div>
      <Navbar />
      <PostsList />
      <AddPostForm />
    </div>
  );
};

export default Index;
