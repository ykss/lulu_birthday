import React from "react";
import styled from "styled-components";
import lulu_full from "../Images/lulu_full.png";
import ImageGallery from "react-image-gallery";

const BookImage = styled.img`
  width: 80%;
`;

const GallaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function Gallary() {
  return (
    <GallaryWrapper>
      <ImageGallery items={images} />;
      {/* <BookImage alt="book" src={lulu_full} /> */}
    </GallaryWrapper>
  );
}

export default Gallary;
