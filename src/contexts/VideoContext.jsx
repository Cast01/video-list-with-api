import { createContext, useState } from "react";
import api from "../services/api";
import { useAxios } from "../hooks/useAxios";
import { v4 as uuidv4 } from "uuid";
import { Router, useRouter } from "next/router";

export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
  const router = useRouter();

  const [openFormModal, setOpenFormModal] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [id, setId] = useState("");
  const [fakeId, setFakeId] = useState(0);

  const { data, mutate } = useAxios("videos");

  function handleAdd() {
    setOpenFormModal(true);
  }

  function handleCloseForm() {
    setOpenFormModal(false);
    setUpdateMode(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const submitVideoObj = {
      title,
      link,
    };
    api.post("https://video-list-with-api.vercel.app/videos", submitVideoObj);

    setOpenFormModal(false);

    router.reload();
  }

  function openFormModalUpdate(id, title, link) {
    setId(id);
    setTitle(title);
    setLink(link);
    setUpdateMode(true);
    setOpenFormModal(true);
  }

  async function handleSubmitUpdate(e) {
    e.preventDefault();
    const submitVideoObj = {
      title,
      link,
    };
    api.put(
      `https://video-list-with-api.vercel.app/videos/${id}`,
      submitVideoObj
    );

    const updatedVideos = {
      videos: data.videos?.map((video) =>
        video._id === id
          ? {
              ...video,
              title,
              link,
            }
          : video
      ),
    };
    mutate(updatedVideos, false);

    setOpenFormModal(false);
    setTitle("");
    setLink("");
  }

  async function deleteVideo(id) {
    api.delete(`https://video-list-with-api.vercel.app/videos/${id}`);

    const updatedVideos = {
      videos: data.videos?.filter((video) => video._id !== id),
    };

    mutate(updatedVideos, false);
  }

  async function likedFunc(id, liked) {
    api.patch(`https://video-list-with-api.vercel.app/videos/${id}`);

    const updatedVideos = {
      videos: data.videos?.map((video) =>
        video._id === id
          ? {
              ...video,
              liked: !liked,
            }
          : video
      ),
    };
    mutate(updatedVideos, false);
  }

  const value = {
    handleAdd,
    handleCloseForm,
    handleSubmit,
    openFormModalUpdate,
    handleSubmitUpdate,
    deleteVideo,
    likedFunc,
    openFormModal,
    title,
    link,
    updateMode,
    setTitle,
    setLink,
  };

  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
}
