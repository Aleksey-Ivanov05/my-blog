import React from 'react';
import {PostType} from "../../types";
import {Link} from "react-router-dom";

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({post}) => {
  return (
    <div className="p-2 border border-dark border-2 mb-4">
      <p className="mb-1 text-muted fs-6">Create on: {post.datetime}</p>
      <p className="mb-2 fs-5"><strong>{post.title}</strong></p>
      <Link to={'/posts/' + post.id} className="btn btn-primary">Read more &raquo;</Link>
    </div>
  );
};

export default Post;