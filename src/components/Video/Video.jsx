import React, { useContext } from "react";
import { Container, Button, ButtonArea } from "./style";
import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5";
import { VideoContext } from "../../contexts/VideoContext";

export default function Video({ id, title, link, liked }) {
  const { openFormModalUpdate, deleteVideo, likedFunc } =
    useContext(VideoContext);

  return (
    <li>
      <Container>
        <h2 title={title}>{title}</h2>
        <a href={link} target="_blank">
          {link}
        </a>
        <ButtonArea>
          <Button liked={liked}>
            <IoThumbsUp onClick={() => likedFunc(id, liked)} />
          </Button>
          <Button>
            <IoPencil onClick={() => openFormModalUpdate(id, title, link)} />
          </Button>
          <Button>
            <IoTrashBin onClick={() => deleteVideo(id)} />
          </Button>
        </ButtonArea>
      </Container>
    </li>
  );
}
