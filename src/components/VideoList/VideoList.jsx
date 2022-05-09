import React, { useEffect, useState } from "react";
import AddVideo from "../AddVideo/AddVideo";
import Video from "../Video/Video";
import { Container, VideoListWrapper } from "./style";

import api from "../../services/api";

export default function VideoList() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    api.get("videos").then(({ data }) => setVideoList(data.videos));
  }, []);

  return (
    <Container>
      <VideoListWrapper>
        {videoList.map((video) => (
          <Video
            key={video._id}
            id={video._id}
            title={video.title}
            link={video.link}
            liked={video.liked}
          />
        ))}
        <AddVideo />
      </VideoListWrapper>
    </Container>
  );
}
