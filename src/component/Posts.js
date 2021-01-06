import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/feed/posts")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setPosts(resData.posts);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  });

  if (loading) {
    return (
      <div className="post-card">
        <h1 className="text-3xl mb2">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-5xl m-4 text-center">All Posts</h1>
      {posts.map((post) => {
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
    </>
  );
}

export default Posts;
