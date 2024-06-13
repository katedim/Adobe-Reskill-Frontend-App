import React, { useEffect, useState } from 'react';
import First from './First';
import Second from './Second';
import { Photo, Post } from "../Types";

const Posts = () => {
    const [dataPosts, setDataPosts] = useState<Post[] | null>(null);
    const [dataPhotos, setDataPhotos] = useState<Photo[] | null>(null);

    useEffect(() => {
        fetch("http://localhost:3000/posts")
          .then((res) => res.json())
          .then((dataPosts: Post[]) => setDataPosts(dataPosts))
          .catch((err) => console.log(err));
    
        fetch("http://localhost:3000/photos")
          .then((res) => res.json())
          .then((dataPhotos: Photo[]) => setDataPhotos(dataPhotos))
          .catch((err) => console.log(err));
      });
  return (
    <div>
        <h1 className='font-bold'>Posts List</h1>
        {dataPosts && dataPhotos ? (
        <>
          <First dataPosts={dataPosts} dataPhotos={dataPhotos} />
          <Second dataPosts={dataPosts} dataPhotos={dataPhotos} />
        </>
      ) : (
        "Loading data..."
      )}
    </div>
  )
}

export default Posts