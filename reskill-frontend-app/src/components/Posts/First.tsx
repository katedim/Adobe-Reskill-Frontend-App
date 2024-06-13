// src/components/Posts/First.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Photo, Post } from "../Types";

interface FirstProps {
  dataPosts: Post[];
  dataPhotos: Photo[];
}

const First: React.FC<FirstProps> = ({ dataPosts, dataPhotos }) => {
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    navigate(`/posts/${index}`);
  };

  return (
    <div className="flex justify-center items-center w-3/5 mx-auto">
      <button onClick={() => handleClick(1)}>
        {dataPhotos.length > 0 ? (
          <img src={dataPhotos[0].url} alt={dataPhotos[0].title} className="w-full h-full object-cover" />
        ) : (
          "Loading photos..."
        )}

        {dataPosts.length > 0 ? (
          <p>{dataPosts[0].body}</p>
        ) : (
          "Loading posts..."
        )}
      </button>
    </div>
  );
};

export default First;
