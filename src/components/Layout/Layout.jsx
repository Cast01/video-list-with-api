import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import VideoList from "../VideoList/VideoList";
import { Container } from "./style";

export default function Layout() {
  return (
    <>
      <Head>
        <title>Video list</title>
      </Head>
      <Container>
        <Header />
        <VideoList />
        <Footer />
      </Container>
    </>
  );
}
