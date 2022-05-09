import styled from "styled-components";

export const Container = styled.main`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoListWrapper = styled.ul`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  list-style-type: none;
`;
