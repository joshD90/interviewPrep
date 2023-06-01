import React, { FC, useState } from "react";
import "./imageThumbnails.css";
import useGetFetch from "./useGetFetch";

type JsonImage = {
  albumId: string;
  title: string;
  id: number;
  url: string;
  thumbnailUrl: string;
};
type Modal = {
  shouldDisplay: boolean;
  title: string;
  url: string;
};

const ImageThumbnails: FC = () => {
  const { error, data } = useGetFetch<JsonImage>(
    "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5"
  );
  const [modal, setModal] = useState<Modal>({
    shouldDisplay: false,
    title: "",
    url: "",
  });

  const toggleModal = (e: React.MouseEvent<HTMLImageElement>) => {
    if (modal.shouldDisplay)
      return setModal({ ...modal, shouldDisplay: false });
    const index = parseInt(e.currentTarget.id);
    const currentImage = data[index];
    setModal({
      shouldDisplay: true,
      title: currentImage.title,
      url: currentImage.url,
    });
  };

  if (error !== "") return <div className="container">{error}</div>;

  return (
    <div className="container">
      {data.map((image, index) => {
        return (
          <div key={image.title} className="thumbnailDiv">
            <img
              src={image.url}
              alt="placeholder image"
              id={index.toString()}
              onMouseEnter={toggleModal}
            />
          </div>
        );
      })}

      {modal.shouldDisplay ? (
        <div className="modal" onMouseLeave={toggleModal} onClick={toggleModal}>
          <img src={modal.url} alt={modal.title} />
        </div>
      ) : null}
    </div>
  );
};

export default ImageThumbnails;
