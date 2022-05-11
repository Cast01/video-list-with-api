import React, { useContext } from "react";
import {
  Overlay,
  Container,
  Header,
  FormContainer,
  FormMain,
  InputGroup,
  Footer,
  CloseIcon,
  CheckIcon,
} from "./style";
import { VideoContext } from "../../contexts/VideoContext";

export default function FormModal() {
  const {
    handleCloseForm,
    setTitle,
    title,
    setLink,
    link,
    handleSubmit,
    updateMode,
    handleSubmitUpdate,
  } = useContext(VideoContext);

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>{updateMode ? "Update" : "Add"} a vídeo</strong>
          <button>
            <CloseIcon onClick={handleCloseForm} />
          </button>
        </Header>
        <FormContainer
          onSubmit={updateMode ? handleSubmitUpdate : handleSubmit}
        >
          <FormMain>
            <InputGroup>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Título do vídeo"
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={updateMode ? title : ""}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="link">Link</label>
              <input
                type="text"
                id="link"
                placeholder="Link do vídeo"
                onChange={(e) => setLink(e.target.value)}
                defaultValue={updateMode ? link : ""}
              />
            </InputGroup>
          </FormMain>
          <Footer>
            <button type="submit">
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
