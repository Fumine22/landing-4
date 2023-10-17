"use client";

import { Menu, Transition } from "@headlessui/react";
import { MenuSquare, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <nav className="bg-[#016194] text-[#23CFCA]">
      <Menu>
        <div className="container">
          <div className="flex justify-between py-4">
            <Link href="#">
              <Image
                src="https://www.vwthemesdemo.com/vw-computer-repair-pro/wp-content/uploads/sites/400/2022/02/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="mx-auto"
              />

              <p className="text-[10px]/[1.7] font-bold">Computer & Laptop</p>
            </Link>

            <div>
              <div className="lg:hidden">
                <Menu.Button
                  onClick={() => setIsShowing((isShowing) => !isShowing)}
                >
                  <MenuSquare className="w-10 h-10" />
                </Menu.Button>

                <Transition
                  show={isShowing}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-3/4"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-3/4"
                  className="fixed z-10 right-0 left-[25%] md:left-[75%] top-0 bottom-0 h-[100vh] bg-[#383939]"
                >
                  <div>
                    <Menu.Button
                      onClick={() => setIsShowing(false)}
                      className="float-right p-4"
                    >
                      <X className="w-10 h-10" />
                    </Menu.Button>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </nav>
  );
};

export default NavBar;
