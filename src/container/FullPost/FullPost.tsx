import React, {useCallback, useEffect, useState} from 'react';
import {FullPostType} from "../../types";
import {Link, useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";

const FullPost = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<FullPostType | null>(null);
  const [loading, setLoading] = useState(false);


  const fetchOnePost = useCallback(async () => {
    try {
      setLoading(true);
      const postsResponse = await axiosApi.get('/posts/' + id + '.json');
      setPost(postsResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id])

  const deletePost = (async () => {
    try {
      setLoading(true);
      await axiosApi.delete('/posts/' + id + '.json');
      navigate('/');
    } finally {
      setLoading(false);
    }
  });
  
  useEffect(() => {
    if (id) {
      fetchOnePost().catch(console.error);
    }
  }, [id, fetchOnePost]);
  
  
  return (
    <>
      {loading ? <Spinner/> : post && (
      <div>
        <p className="mb-1 text-muted fs-6">Create on: {post.datetime}</p>
        <h3>{post.title}</h3>
        <div className="fs-4">{post.body}</div>
        <div className="mt-3">
          <button className="btn btn-danger me-2" onClick={deletePost}>Delete</button>
          <Link to={'/posts/' + id + '/edit'} className="btn btn-primary">Edit</Link>
        </div>
      </div>
      )}
    </>
  );
};

export default FullPost;