import { createContext, useState } from "react";
import api from "../services/api";

export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
  const [openFormModal, setOpenFormModal] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  function handleAdd() {
    setOpenFormModal(true);
  }

  function handleCloseForm() {
    setOpenFormModal(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const submitVideoObj = {
      title,
      link,
    };
    api.post("videos", submitVideoObj);
    setOpenFormModal(false);
  }

  const value = {
    handleAdd,
    handleCloseForm,
    handleSubmit,
    openFormModal,
    title,
    link,
    setTitle,
    setLink,
  };

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
}
