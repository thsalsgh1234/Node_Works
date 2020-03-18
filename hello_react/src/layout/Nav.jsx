import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <a>홈</a>
        </li>
        <li>
          <a>도서보기</a>
        </li>
        <li>
          <a>독서록보기</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
