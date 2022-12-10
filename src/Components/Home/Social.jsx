import React from "react";

const Social = () => {
  return (
    <div className="home-social">
      <a
        href="https://www.instagram.com/direct/inbox/"
        className="home-social-icon"
        target="_blank"
        title="Facebook"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://github.com/KaremSherif"
        className="home-social-icon"
        target="_blank"
        title="Github"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/karem-sherif-2002bd/"
        className="home-social-icon"
        target="_blank"
        title="Linkedin"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
    </div>
  );
};

export default Social;
