import React from "react";
import { useNavigate } from "react-router-dom";
import { Photo, Post } from "../Types";

interface ThirdProps {
  dataPosts: Post[];
  dataPhotos: Photo[];
}

const Third: React.FC<ThirdProps> = ({ dataPosts, dataPhotos }) => {
  const navigate = useNavigate();
  const postsFiltered  = dataPosts.filter(post => post.id >= 4 && post.id <= 12);
  const photosFiltered  = dataPhotos.filter(photo => photo.id >= 4 && photo.id <= 12);

  const handleClick = (index: number) => {
    navigate(`/posts/${index + 4}`);
    console.log(index);
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < photosFiltered.length; i += 3) {
      const photoSlice = photosFiltered.slice(i, i + 3);
      rows.push(
        <div key={i} className="flex pb-10 mx-8">
          {photoSlice.map((photo, index) => (
            <div key={index} className="flex-1">
              <button onClick={() => handleClick(i + index)}>
                <div className="flex justify-center">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-96 object-cover mx-8"
                  />
                </div>
                <p>{postsFiltered[i + index].body}</p>
              </button>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return <div>{renderRows()}</div>;
};

export default Third;
