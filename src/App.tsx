import React, {useCallback, useEffect, useState} from 'react';
import Home from "./container/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, useLocation} from "react-router-dom";
import axiosApi from "./axiosApi";
import {PostsList, PostType} from "./types";
import './App.css';
import FullPost from "./container/FullPost/FullPost";
import NewPost from "./container/NewPost/NewPost";
import EditPost from "./container/EditPost/EditPost";
import About from "./container/About/About";
import Contacts from "./container/Contacts/Contacts";

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);

      const postsResponse = await axiosApi.get<PostsList>('/posts.json');

      const posts = Object.keys(postsResponse.data).map(key => {
        const post = postsResponse.data[key];
        post.id = key;
        return post;
      });

      setPosts(posts);
    } finally {
      setLoading(false);
    }
  },[])

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/posts') {
      void fetchPosts();
    }
  }, [location, fetchPosts]);

  return (
    <div className="my-container pb-5">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={(
            <Home posts={posts} postsLoading={loading}/>
          )}/>
          <Route path="/posts" element={(
            <Home posts={posts} postsLoading={loading}/>
          )}/>
          <Route path='/posts/:id' element={(
            <FullPost/>
          )}/>
          <Route path='/new-post' element={(
            <NewPost/>
          )}/>
          <Route path='/posts/:id/edit' element={(
            <EditPost/>
          )}/>
          <Route path='/about' element={(
            <About/>
          )}/>
          <Route path='/contacts' element={(
            <Contacts/>
          )}/>
         </Routes>
      </main>
    </div>
  );
}

export default App;
