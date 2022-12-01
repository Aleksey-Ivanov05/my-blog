import React from 'react';
import {PostType} from "../../types";
import Post from "../../components/Post/Post";

interface Props {
  posts: PostType[];
}

const Home:React.FC<Props> = ({posts}) => {
  return (
    <div className="mt-4">
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  );
};

export default Home;