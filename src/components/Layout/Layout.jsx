import Head from "next/head";
import React, { useContext } from "react";
import { VideoContext } from "../../contexts/VideoContext";
import Footer from "../Footer/Footer";
import FormModal from "../FormModal/FormModal";
import Header from "../Header/Header";
import VideoList from "../VideoList/VideoList";
import { Container } from "./style";

export default function Layout() {
  const { openFormModal } = useContext(VideoContext);

  return (
    <>
      <Head>
        <title>Video list</title>
      </Head>
      <Container>
        {openFormModal && <FormModal />}
        <Header />
        <VideoList />
        <Footer />
      </Container>
    </>
  );
}
