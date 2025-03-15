import Image from "next/image";
import React from "react";
import { routerNavBar } from "../constants/router.constant";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  console.log("siuCheckRouter", router);
  return (
    <div className="menu_head">
      <div className="image">TranMinhHieu</div>
      <div className="nav_bar_list">
        {routerNavBar?.map((item) => (
          <div
            className={`nav_bar_item ${
              router?.asPath == item?.link ? "active" : ""
            }`}
            onClick={() => router.push(item?.link)}
          >
            {item?.title}
          </div>
        ))}
      </div>
      <div
        className="git_hub"
        onClick={() => window.open("https://github.com/Hieuuu1510")}
      >
        <Image
          alt="Picture of the author"
          src="/images/github-mark-white.png"
          width={30}
          height={30}
          loading="lazy"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default NavBar;
