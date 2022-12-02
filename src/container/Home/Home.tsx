import React from 'react';
import {PostType} from "../../types";
import Post from "../../components/Post/Post";
import Spinner from "../../components/Spinner/Spinner";

interface Props {
  posts: PostType[];
  postsLoading: boolean;
}

const Home:React.FC<Props> = ({posts, postsLoading}) => {
  return (
    <>
      {postsLoading ? <Spinner/> : (<div className="mt-4">
        {posts.map(post => (
          <Post post={post} key={post.id}/>
        ))}
      </div>)}
    </>


  );
};

export default Home;