import React, {useCallback, useEffect, useState} from 'react';
import {FullPostType, PostApi} from "../../types";
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import PostForm from "../../components/PostForm/PostForm";
import Spinner from "../../components/Spinner/Spinner";

const EditPost: React.FC = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostApi | null>(null);
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
  const updatePost = async (post: PostApi) => {
    try {
      setLoading(true);
      await axiosApi.put<FullPostType>('/posts/' + id + '.json', post);
      navigate('/posts/' + id);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      fetchOnePost().catch(console.error);
    }
  }, [id, fetchOnePost]);


  return (
    <div>
      {loading ? <Spinner/> : post && <PostForm onSubmit={updatePost} existingPost={post}/>}
    </div>
  );
};

export default EditPost;