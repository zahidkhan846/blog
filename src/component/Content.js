import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

function Content() {
  return (
    <>
      <div className="post-card">
        <img src={img1} alt="image1" className="h-full rounded mb-20 shadow" />
        <div className="post-content">
          <h2 className="text-3xl mb-2">Content</h2>
          <p className="mb-2">Discription will go here.</p>
          <span>Posted on {new Date().toISOString()}</span>
        </div>
      </div>

      <div className="post-card">
        <img src={img2} alt="image2" className="h-full rounded mb-20 shadow" />
        <div className="post-content">
          <h2 className="text-3xl mb-2">Content</h2>
          <p className="mb-2">Discription will go here.</p>
          <span>Posted on {new Date().toISOString()}</span>
        </div>
      </div>

      <div className="post-card">
        <img src={img3} alt="image3" className="h-full rounded mb-20 shadow" />
        <div className="post-content">
          <h2 className="text-3xl mb-2">Content</h2>
          <p className="mb-2">Discription will go here.</p>
          <span>Posted on {new Date().toISOString()}</span>
        </div>
      </div>
    </>
  );
}

export default Content;
