import styled from "styled-components";
import { IoAdd } from "react-icons/io5";

export const AddVideoButton = styled.button`
  border: 5px dashed #fff;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 10px;
  height: 200px;
  width: 200px;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddIcon = styled(IoAdd)`
  stroke: #fff;
  width: 64px;
  height: 64px;
`;
