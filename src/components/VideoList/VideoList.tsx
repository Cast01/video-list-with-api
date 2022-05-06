import React from "react";
import AddVideo from "../AddVideo/AddVideo";
import { Container, VideoListWrapper } from "./style";

export default function VideoList() {
  return (
    <Container>
      <VideoListWrapper>
        <AddVideo />
      </VideoListWrapper>
    </Container>
  );
}
