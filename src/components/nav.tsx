"use client";

import { ModeToggle } from "./ui/mode-toggle";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full bg-neutral-800 rounded shadow-lg p-4 top-0">
      <div className="md:w-250 md:h-50 w-250 h-50">
        <Image
          alt="Passport Reader"
          src="logo 2.svg"
          width={250}
          height={50}
          layout="responsive"
        />
      </div>
      <ModeToggle />
    </div>
  );
};

export default NavBar;
