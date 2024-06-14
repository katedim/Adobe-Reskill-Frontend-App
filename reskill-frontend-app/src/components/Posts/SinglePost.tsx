import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Photo, Post } from "../Types";

const SinglePost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((dataPost: Post) => setPost(dataPost))
      .catch((err) => console.log(err));

    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((dataPhoto: Photo) => setPhoto(dataPhoto))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container mx-auto  grid grid-cols-2 divide-x flex-wrap items-center mt-6">
      <div>
        <h1 className="text-2xl font-bold mb-4 mx-16">Single Post</h1>
        {post ? (
          <div className="mx-16">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ) : (
          "Loading post..."
        )}
      </div>
      <div className="flex justify-end mx-8">
        {photo ? (
          <div>
            <img
              src={photo.url}
              alt={photo.title}
              className="w-[300px] h-[200px] object-cover"
            />
          </div>
        ) : (
          "Loading photo..."
        )}
      </div>
    </div>
  );
};

export default SinglePost;
