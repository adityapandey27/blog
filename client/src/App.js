import { BrowserRouter, Routes, Route } from "react-router-dom";import "./App.css";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import SinglePost from "./components/singlePost/SinglePost";
import { Context, ContextProvider } from "./context/Context";
import { useContext } from "react";
function App() {
  const {user}=useContext(Context);
  console.log("user============",user);
  return (
    <BrowserRouter>
    <ContextProvider>
      
      <TopBar />
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/write"element={<Write/>}/>
      {/* <Route path="/write"element={user?<Write/>:<Register/>}/> */}
      <Route path="/settings" element={user?<Settings/>:<Register/>} />
      <Route path="/post/:postId" element={<Single />} />

    </Routes>
      {/* <Register /> */}
      
    </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
