import { FC } from "react";
import styled from "styled-components";

export const DownloadBtn: FC = () => {
  return (
    <Wrapper>
      <button>Download</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  button {
    font-size: 46px;
    background: #7FB77E;
    color: white;
    border-radius: 10px;
    outline: none;
    border: none;
    padding: 15px 45px;
    cursor: pointer;
    &:hover{
      opacity: 0.9;
    }
  }
`;
