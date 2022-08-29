import { FC } from "react";
import { IData } from "interfaces";
import styled from "styled-components";

interface ITrailerProps {
  datas: IData;
}

export const Trailer: FC<ITrailerProps> = ({ datas }) => {
  return (
    <Wrapper>
      <h4>Trailer:</h4>
      <iframe
        width="860"
        height="480"
        src={datas.trailerLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    align-self: flex-start;
  }
`;
