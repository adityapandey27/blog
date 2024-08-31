import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Hourglass,Blocks } from "react-loader-spinner";
import {getRequest} from "../../api_request"
export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getRequest("/post" + search);
      console.log("ressssssssssss 11111111111",res.data)
      setPosts(res.data);
      setLoader(false);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      {loader ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Blocks
            visible={true}
            height="50"
            width="50"
            ariaLabel="Blocks-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      ) : (
        <>
          <Header />
          <div className="home">
            <Posts posts={posts} />
            <SideBar />
          </div>
        </>
      )}
    </>
  );
}
