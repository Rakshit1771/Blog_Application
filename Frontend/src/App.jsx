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
import Footer from "./Components/Footer/Footer.jsx";
import PostDetail from "./Pages/Post_Details/Post_Details.jsx";
import EditPost from "./Pages/EditPost.jsx";
import "./App.css";

function App() {
  const location = useLocation();
  const path = location.pathname;

const hideCenter =
  ["/register", "/login", "/home", "/addpost", "/mypost"].includes(path) ||
  path.startsWith("/editpost") ||
  path.startsWith("/post");

  const hideOnDynamicRoutes =
    path.startsWith("/mypost/") || path.startsWith("/post/");

  // const hideCenter = hideCenterRoutes.includes(path) || hideOnDynamicRoutes;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      {!hideCenter && <Center />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/editpost/:id" element={<EditPost />} /> */}

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
        
        {/* <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } */}
        
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
