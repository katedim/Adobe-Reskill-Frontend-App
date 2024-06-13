// src/components/SinglePost.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../Types";

const SinglePost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    // Fetch the specific post using the id parameter from the API
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data: Post) => setPost(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Single Post</h1>
      {post ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        "Loading post..."
      )}
    </div>
  );
};

export default SinglePost;
