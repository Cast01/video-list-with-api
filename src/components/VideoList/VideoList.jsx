import AddVideo from "../AddVideo/AddVideo";
import Video from "../Video/Video";
import { Container, VideoListWrapper } from "./style";
import { useAxios } from "../../hooks/useAxios";

export default function VideoList() {
  const { data } = useAxios("videos");

  return (
    <Container>
      <VideoListWrapper>
        {data?.videos?.map((video) => (
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
