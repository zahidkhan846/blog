import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  // const [editMode, setEditMode] = useState(false);

  const history = useHistory();

  const submitFormHandler = (e) => {
    e.preventDefault();

    let url = "http://localhost:8080/feed/add-post";
    let postMethod = "POST";

    fetch(url, {
      method: postMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Creating or editing post faild!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
      })
      .catch((err) => setError(err.message));
    history.push("/");
  };

  return (
    <div className="form-container">
      <form className="mt-20 p-1" onSubmit={submitFormHandler}>
        <h1 className="text-3xl mb-2">Add Post</h1>
        {error && <p className="mb-1 text-red-500">{error}</p>}
        <label
          htmlFor="title"
          className="block text-m font-medium text-gray-700 mb-1"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="mb-5 h-7 focus:border-grey-500 flex-1 block w-full border-2 border-green-500 rounded sm:text-sm"
        />

        <label
          htmlFor="content"
          className="block text-m font-medium text-gray-700 mb-1"
        >
          Content
        </label>
        <div className="mt-1">
          <textarea
            id="content"
            name="content"
            rows="3"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="mb-5 focus:border-grey-500 flex-1 block w-full border-2 border-green-500 rounded sm:text-sm"
          />
        </div>

        <div className="flex text-m text-gray-600">
          <label
            htmlFor="file-upload"
            className="mb-5 relative cursor-pointer bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-500"
          >
            <span className="text-yellow-400">Upload a file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-m font-medium rounded-md text-white bg-green-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default AddPost;
