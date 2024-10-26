import React from "react";
import "./App.css"; // Ensure you have the styles available

function Footer() {
  return (
    <footer className="footer">
      <p>
        Coded By{" "}
        <a
          href="https://github.com/MpumiNico"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mpumi Nicollete Mahlalela
        </a>{" "}
        | Hosted on{" "}
        <a
          href="https://github.com/MpumiNico/react-weather"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        &{" "}
        <a
          href="https://app.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </p>
    </footer>
  );
}
export default Footer;