import React, {useCallback, useEffect, useState} from 'react';
import {FullPostType} from "../../types";
import {Link, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";

const FullPost = () => {
  const {id} = useParams();
  const [post, setPost] = useState<FullPostType | null>(null);

  const fetchOnePost = useCallback(async () => {
    try {
      const postsResponse = await axiosApi.get('/posts/' + id + '.json');
      setPost(postsResponse.data);
    } finally {

    }
  }, [id])
  
  useEffect(() => {
    if (id) {
      fetchOnePost().catch(console.error);
    }
  }, [id, fetchOnePost]);
  
  
  return (
    <>
      {post && (
      <div>
        <h3>{post.title}</h3>
        <div className="fs-4">{post.body}</div>
        <div className="mt-3">
          <button className="btn btn-danger me-2">Delete</button>
          <Link to={'/posts/' + id + 'edit'} className="btn btn-primary">Edit</Link>
        </div>
      </div>
      )}
    </>
  );
};

export default FullPost;