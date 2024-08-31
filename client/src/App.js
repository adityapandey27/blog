import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Contact from "./pages/contact/Contact";
import { Context, ContextProvider } from "./context/Context";
import { useContext } from "react";
import AboutUs from "./pages/about/About";
function App() {
  const {user}=useContext(Context);
  return (
    <BrowserRouter>
    <ContextProvider>
      
      <TopBar />
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      {/* <Route path="/write"element={<Write/>}/> */}
      <Route path="/write"element={<Write/>}/>
      <Route path="/settings" element={user?<Settings/>:<Register/>} />
      <Route path="/post/:postId" element={<Single />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<AboutUs/>}/>

    </Routes>
      {/* <Register /> */}
      {/*  */}
    </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
