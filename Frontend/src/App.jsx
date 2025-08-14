import { Route, useLocation, Routes } from "react-router-dom";
import { useEffect } from "react";
import Center from "./Components/Center/Center.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
import AddPost from "./Pages/Add Posts/Add_post.jsx";
import PrivateRoute from "./Private_Route.jsx";
import MyPosts from "./Pages/Posts/MyPosts.jsx";
import Home from "./Components/Home/Home.jsx";
// import Footer from "./Components/Footer/Footer.jsx";
import PostDetail from "./Pages/Post_Details/Post_Details.jsx";
import EditPost from "./Pages/EditPost.jsx";
import Header from "./Components/Header/Header.jsx";
import Explore from "./Components/Explore/Explore.jsx";
import Profile from "./Pages/Profle/Profile.jsx";
// import { login } from "./Store/authSlice.js";
import "./App.css";
import { login } from "./Store/authSlice.js";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const path = location.pathname;
  const isLoggedIn = useSelector((state) => state.auth.status);
  const hideCenter =
    [
      "/register",
      "/login",
      "/home",
      "/addpost",
      "/mypost",
      "/explore",
      "/profile",
    ].includes(path) ||
    path.startsWith("/editpost") ||
    path.startsWith("/post");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      {!hideCenter && <Header />}
      {!hideCenter && <Center />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/addpost"
          element={
            <PrivateRoute>
              <AddPost />
            </PrivateRoute>
          }
        />

        <Route
          path="/editpost/:id"
          element={
            <PrivateRoute>
              <EditPost />
            </PrivateRoute>
          }
        />

        <Route
          path="/mypost"
          element={
            <PrivateRoute>
              <MyPosts />
            </PrivateRoute>
          }
        />

        <Route
          path="/post/:id"
          element={
            <PrivateRoute>
              <PostDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>

      {/* <Footer />  */}
    </>
  );
}

export default App;
