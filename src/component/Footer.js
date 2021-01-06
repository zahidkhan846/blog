import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center h-16 bg-black text-white object-bottom">
      <p>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://codewithzahid.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code with Zahid
        </a>
      </p>
    </div>
  );
}

export default Footer;
