import { FC } from "react";
import { IData } from "interfaces";
import styled from "styled-components";

interface IDescriptionProps {
  datas: IData;
}

export const Description: FC<IDescriptionProps> = ({ datas }) => {
  return (
    <div>
      <h4>Description:</h4>
      <DescriptionText>{datas.description}</DescriptionText>
    </div>
  );
};

const DescriptionText = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;
