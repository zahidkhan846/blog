import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/feed/post/" + id)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Failed to fetch post.");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        setPost(resData.post);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [id]);

  const { _id, author, content, createdAt, imageUrl, title, updatedAt } = post;

  let image = (
    <img
      src={`http://localhost:8080/${imageUrl}`}
      alt={title}
      className="h-full rounded mb-20 shadow"
    />
  );

  if (loading) {
    image = (
      <div className="post-card">
        <h1 className="text-3xl mb2">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="post-card">
      {image}
      {error && <h2 className="text-3xl text-blue-500 mb-2">{error}</h2>}
      <div className="post-content">
        <h2 className="text-3xl text-red-500 mb-2">{title}</h2>
        <p className="mb-2">{content}</p>
        <span>
          Posted on {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </span>
        <span>Posted by {author}</span>
      </div>
      <br />
      <div className="post-content">
        <p className="mb-2">POST ID: {_id}</p>
        <span>Last Update {moment(updatedAt).fromNow()}</span>
      </div>
    </div>
  );
}

export default SinglePost;
