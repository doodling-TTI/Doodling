import React, { useState } from "react";
import styled from "styled-components";
import ImageExample from "../img/img_dog.svg";
import ImageRemove from "../img/ic_removeB.svg";

export default function ImageEditable() {
  const [isHover, setIsHover] = useState(false);

  function deleteImage() {}

  return (
    <ImageBox
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Img src={ImageExample} />

      {isHover && (
        <Background>
          <Button src={ImageRemove} onClick={deleteImage} />
        </Background>
      )}
    </ImageBox>
  );
}

const ImageBox = styled.div`
  width: 180px;
  height: 180px;
  padding: 0;
  margin-bottom: 10px;

  border: 2px solid #2b234a;
  border-radius: 15px;
  box-sizing: border-box;

  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

const Button = styled.img`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
`;
