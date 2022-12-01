import React, {useCallback, useEffect, useState} from 'react';
import Home from "./container/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, useLocation} from "react-router-dom";
import axiosApi from "./axiosApi";
import {PostsList, PostType} from "./types";
import './App.css';
import FullPost from "./container/FullPost/FullPost";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const location = useLocation();

  const fetchPosts = useCallback(async () => {
    try {
      const postsResponse = await axiosApi.get<PostsList>('/posts.json');

      const posts = Object.keys(postsResponse.data).map(key => {
        const post = postsResponse.data[key];
        post.id = key;
        return post;
      });

      setPosts(posts);
    } finally {

    }
  },[])

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/posts') {
      void fetchPosts();
    }
  }, [location, fetchPosts]);

  return (
    <div className="my-container">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={(
            <Home posts={posts}/>
          )}/>
          <Route path="/posts" element={(
            <Home posts={posts}/>
          )}/>
          <Route path='/posts/:id' element={(
            <FullPost/>
          )}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
