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
    <div className="flex justify-center items-center pb-10 mx-16">
      <button onClick={() => handleClick(1)}>
        {dataPhotos.length > 0 ? (
          <div className="flex justify-center">
            <img
              src={dataPhotos[0].url}
              alt={dataPhotos[0].title}
              className="w-full h-96 object-cover"
            />
          </div>
        ) : (
          "Loading photos..."
        )}

        {dataPosts.length > 0 ? <p>{dataPosts[0].body}</p> : "Loading posts..."}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
          porttitor felis. Nunc non tellus porttitor purus congue porta vitae et
          diam. Integer et ultrices ex, sed ullamcorper arcu. Quisque eget sem
          libero. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Suspendisse hendrerit sapien tortor, nec hendrerit nisi tincidunt at.
          Fusce ex nibh, pellentesque eu augue eget, faucibus varius velit.
          Nulla in enim mollis, convallis tortor vel, semper neque. Pellentesque
          dignissim sem dignissim orci ullamcorper, id cursus urna tempus.
          Praesent consectetur ex at nibh feugiat laoreet. Suspendisse eget
          rutrum ex. Morbi lobortis, enim non venenatis pellentesque, urna urna
          vulputate nibh, ac hendrerit massa orci accumsan diam.
        </p>
      </button>
    </div>
  );
};

export default First;
