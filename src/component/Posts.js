import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import Pagination from "./Pagination";

function Posts() {
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
    const res = await axios.get("http://localhost:8080/feed/posts");
    try {
      setPosts(res.data.posts);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="post-card">
        <h1 className="text-3xl mb2">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-5xl m-4 text-center text-green-700">All Posts</h1>
      {error && <p className="text-red-500">{error}</p>}
      {Array.isArray(posts) &&
        currentPosts.map((post) => {
          const { _id, author, content, createdAt, imageUrl, title } = post;
          return (
            <div
              key={_id}
              className="max-w-sm rounded overflow-hidden shadow-lg m-auto mb-5"
            >
              <Link to={`post/${_id}`}>
                <img
                  src={`http://localhost:8080/${imageUrl}`}
                  alt={title}
                  className="shadow"
                />
                <div className="px-6 py-4">
                  <ul>
                    <li className="font-bold text-green-500 text-xl mb-2">
                      {title}
                    </li>
                    <li>{content}</li>
                  </ul>
                  <div className="text-m mt-2 text-red-300">
                    <p className="text-green-700">Posted by {author}</p>
                    <p>Created Date: {moment(createdAt).format("MMM Do YY")}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}

      <Pagination
        elementsPerPage={postsPerPage}
        totalElements={posts.length}
        onBtnClick={onBtnClick}
      />
    </>
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
