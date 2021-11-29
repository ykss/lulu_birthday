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
    original:
      "https://github.com/ykss/lulu_birthday/blob/master/lulu_birthday/src/Images/lulu1.jpeg?raw=true",
    thumbnail:
      "https://github.com/ykss/lulu_birthday/blob/master/lulu_birthday/src/Images/lulu1.jpeg?raw=true",
  },
  {
    original:
      "https://github.com/ykss/lulu_birthday/blob/master/lulu_birthday/src/Images/lulu2.jpeg?raw=true",
    thumbnail:
      "https://github.com/ykss/lulu_birthday/blob/master/lulu_birthday/src/Images/lulu2.jpeg?raw=true",
  },
  {
    original:
      "https://github.com/ykss/lulu_birthday/blob/master/lulu_birthday/src/Images/lulu3.jpeg?raw=true",
    thumbnail:
      "https://github.com/ykss/lulu_birthday/blob/master/lulu_birthday/src/Images/lulu3.jpeg?raw=true",
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
