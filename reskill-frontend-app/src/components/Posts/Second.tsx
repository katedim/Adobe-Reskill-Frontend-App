// src/components/Posts/Second.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Photo, Post } from "../Types";

interface SecondProps {
  dataPosts: Post[];
  dataPhotos: Photo[];
}

const Second: React.FC<SecondProps> = ({ dataPosts, dataPhotos }) => {
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    navigate(`/posts/${index}`);
  };

  return (
    <div className="flex pb-20  mx-8">
      {dataPhotos.slice(1, 3).map((photo, index) => (
        <div key={index} className="flex-1">
          <button onClick={() => handleClick(index + 2)}>
            <div className="flex justify-center">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-96 object-cover mx-8"
              />
            </div>
            <p>{dataPosts[index + 1].body}</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Second;
