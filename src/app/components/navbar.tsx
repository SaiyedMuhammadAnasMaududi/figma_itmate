import Link from "next/link";
import React from "react";
import { Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"] });
function Navbar() {
  let navitems = [
    { name: "Home", Link: "#" },
    { name: "About", Link: "#" },
    { name: "Skills", Link: "#" },
    { name: "Project", Link: "#" },
    { name: "Contact", Link: "#" },
  ];
  return (
    <div className="flex justify-between w-full h-[100px] py-6 border border-b-[1px] border-black ">
      <div className="mx-16 text-[30px] font-bold">Rizfan</div>
      <div className={`${sora} flex list-none gap-[50px] w-[655px] h-[35px] font-normal text-[28px] mr-12`}>
        {navitems.map((item, i) => (

          <li key={i} className={`no-dots ${
            item.name === "Home" ? "text-black" :"text-aboutcolor"
          }`}>
            {item.name}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
