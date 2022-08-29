import { FC } from "react";
import { IData } from "interfaces";
import styled from "styled-components";
import { motion } from "framer-motion";

interface ISysReqProps {
  datas: IData;
}

export const SysReq: FC<ISysReqProps> = ({ datas }) => {
  const AnimTitle = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.9,
        delay: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.9,
        delay: 0.5,
      },
    },
  };

  return (
    <Wrapper variants={AnimTitle} initial="hidden" animate="visible">
      <h4>Sustem Requirement:</h4>
      <Text>Genre: {datas.systemRequirement.genre}</Text>
      <Text>OS: {datas.systemRequirement.os}</Text>
      <Text>Developer: {datas.systemRequirement.developper}</Text>
      <Text>Platform: {datas.systemRequirement.platform}</Text>
      <Text>DirectX: {datas.systemRequirement.directX}</Text>
      <Text>CPU: {datas.systemRequirement.cpu}</Text>
      <Text>RAM: {datas.systemRequirement.ram}</Text>
      <Text>GPU: {datas.systemRequirement.gpu}</Text>
    </Wrapper>
  );
};
const Wrapper = styled(motion.div)`
  font-size: 30px;
  margin-bottom: 5px;
  color: #c8c0c0;
  text-transform: capitalize;
  margin-bottom: 120px;
`;
const Text = styled.p`
  font-size: 30px;
  margin-bottom: 5px;
  color: #c8c0c0;
  text-transform: capitalize;
`;
