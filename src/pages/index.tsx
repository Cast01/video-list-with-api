import type { NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

type VideoType = {
  _id: string;
  title: string;
  link: string;
  liked: boolean;
}[];

const Home: NextPage = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [videos, setVideos] = useState<VideoType>([]);

  function sendData(e: FormEvent) {
    e.preventDefault();

    axios.post("http://localhost:3001/videos", {
      title,
      link,
    });
  }

  useEffect(() => {
    fetch("http://localhost:3001/videos")
      .then((resp) => resp.json())
      .then((data) => setVideos(data.videos));
  }, []);

  return (
    <>
      <form onSubmit={sendData}>
        <label>Title:</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <label>Link:</label>
        <input type="text" onChange={(e) => setLink(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
      <div>VideosGet</div>
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            <h3>{video.title}</h3>
            <h3>{video.link}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

// export async function getServerSideProps() {
//   const resp = await axios.get("http://localhost:3001/videos");
//   const data = resp.data;

//   console.log(data);

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

export default Home;
