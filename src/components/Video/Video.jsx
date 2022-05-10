import React, { useContext } from "react";
import { Container, Button, ButtonArea } from "./style";
import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5";
import VideoList from "../VideoList/VideoList";
import { VideoContext } from "../../contexts/VideoContext";

export default function Video({ id, title, link, liked }) {
  const { handleUpdateModal } = useContext(VideoContext);

  return (
    <li>
      <Container>
        <h2 title={title}>{title}</h2>
        <a href={link} target="_blank">
          {link}
        </a>
        <ButtonArea>
          <Button liked={liked}>
            <IoThumbsUp />
          </Button>
          <Button>
            <IoPencil />
          </Button>
          <Button>
            <IoTrashBin />
          </Button>
        </ButtonArea>
      </Container>
    </li>
  );
}
