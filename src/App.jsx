import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CreatePost from "./pages/CreatePost";
import Explore from "./pages/Explore";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";
import ProtectedPage from "./pages/ProtectedPage";
import Register from "./pages/Register";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route element={<ProtectedPage />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Feed />} />
          <Route path="profile/:userId/*" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/new-post" element={<CreatePost />} />
          <Route path="/p/:postId" element={<PostDetails />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
