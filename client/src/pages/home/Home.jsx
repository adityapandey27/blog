import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import { useState,useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts  posts={posts}/>
        <SideBar />
      </div>
    </>
  );
}
