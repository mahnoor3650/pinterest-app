import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './routes/homepage/HomePage.jsx';
import Create from './routes/createPage/Create.jsx';
import AuthPage from './routes/authPage/AuthPage.jsx';
import Post from './routes/postpage/Post.jsx';
import Profile from './routes/profilePage/Profile.jsx';
import Search from './routes/searchPage/Search.jsx';
import MainLayout from './routes/layouts/MainLayout.jsx';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<Create />} />

          <Route path="/pin/:id" element={<Post />} />
          <Route path="/:usermame" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
