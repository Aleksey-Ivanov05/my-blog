import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {PostApi} from "../../types";
import axiosApi from "../../axiosApi";
import PostForm from "../../components/PostForm/PostForm";
import Spinner from "../../components/Spinner/Spinner";

const NewPost = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const createDish = async (post: PostApi) => {
    try {
      setLoading(true)
      await axiosApi.post('/posts.json', post);
      navigate('/');
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="row mt-2">
      {loading ? <Spinner/> :
      <div className="col">
        <PostForm onSubmit={createDish}/>
      </div>}

    </div>
  );
};

export default NewPost;