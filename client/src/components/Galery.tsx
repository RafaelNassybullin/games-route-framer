import { FC } from "react";
import { IData } from "interfaces";
import styled from "styled-components";

interface IGaleryProps {
  datas: IData;
}

export const Galery: FC<IGaleryProps> = ({ datas }) => {
  return (
    <>
      <h4>ScreenShots</h4>
      <Wrapper>
        <GaleryWrapper>
          {datas.galeryImages.map((imageItem, index) => (
            <ImageWrap key={`key-${index + 1}`}>
              <img src={imageItem} alt={`image-${index + 1}`} />
            </ImageWrap>
          ))}
        </GaleryWrapper>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const GaleryWrapper = styled.div`
  margin-bottom: 90px;
  width: 612px;
  display: flex;
  flex-wrap: wrap;
`;
const ImageWrap = styled.div`
  width: 300px;
  height: 200px;
  margin: 3px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 300ms transform ease-in-out;
    &:hover{
      transform: scale(1.09)
    }
  }
`;
