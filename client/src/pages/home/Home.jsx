import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import { useState,useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
   const [posts, setPosts] = useState([]);
  const {search}=useLocation();
  console.log("location priting",search);
   useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post"+search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
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
