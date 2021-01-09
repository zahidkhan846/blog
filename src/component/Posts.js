import React, { useContext, useEffect, useState } from "react";
import { Post } from "./Post";
import axios from "axios";
import Pagination from "./Pagination";
import { AuthContext } from "../context/AuthContext";

function Posts() {
  const { token, userAuth } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const onBtnClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:8080/feed/posts", {
      headers: { Authorization: `Bearer ${token}` },
    });
    try {
      console.log(res);
      setPosts(res.data.posts);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (userAuth) {
      fetchPosts();
    }
  }, []);

  console.log(posts);

  if (loading) {
    return (
      <div className="post-card">
        <h1 className="text-3xl mb2">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <h1 className="text-5xl m-4 text-center text-green-700">All Posts</h1>
      {error && <p className="text-red-500">{error}</p>}
      <Post posts={currentPosts} />
      <Pagination
        elementsPerPage={postsPerPage}
        totalElements={posts.length}
        onBtnClick={onBtnClick}
      />
    </div>
  );
}

export default Posts;

// useEffect(() => {
//   fetch("http://localhost:8080/feed/posts")
//     .then((res) => {
//       return res.json();
//     })
//     .then((resData) => {
//       setPosts(resData.posts);
//       setLoading(false);
//     })
//     .catch((error) => {
//       console.log(error);
//       setError(error.message);
//     });
//   setLoading(false);
// });
