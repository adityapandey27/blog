import { BrowserRouter, Routes, Route } from "react-router-dom";import "./App.css";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import SinglePost from "./components/singlePost/SinglePost";

function App() {
  const user=false;

  return (
    <BrowserRouter>
      <TopBar />
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/register" element={user?<Home/>:<Register/>} />
      <Route path="/login" element={user?<Home/>:<Login/>} />
      {
        user?<Route path="/write" element={<Write/>} />:
        <Route path="/register" element={<Register/>} />
      }
      
      <Route path="/settings" element={user?<Settings/>:<Register/>} />
      <Route path="/post/:postId" element={<Single />} />

    </Routes>
      {/* <Register /> */}
    </BrowserRouter>
  );
}

export default App;
