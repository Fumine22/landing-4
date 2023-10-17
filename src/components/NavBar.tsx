"use client";

import { Menu, Transition } from "@headlessui/react";
import { MenuSquare, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface NavbarMenu {
  href: string;
  path: string;
  children?: NavbarMenu[];
}

const navbarItems: NavbarMenu[] = [
  { href: "#", path: "Home" },
  {
    href: "#",
    path: "Our Services",
    children: [
      { href: "#", path: "Repair Computer" },
      { href: "#", path: "Repair Laptop" },
      { href: "#", path: "Clean Computer" },
      { href: "#", path: "Clean Laptop" },
    ],
  },
  { href: "#", path: "Pages" },
  {
    href: "#",
    path: "Shop",
    children: [
      { href: "#", path: "Accessory" },
      { href: "#", path: "Headphone" },
      { href: "#", path: "Mouse" },
      { href: "#", path: "Monitor" },
    ],
  },
  { href: "#", path: "Blog" },
  { href: "#", path: "Contact" },
];

function NavbarLink({ href, path, children }: NavbarMenu) {
  return (
    <li className="py-1">
      <Link href={href} className="w-full hover:text-[#23CFCA]">
        <p className="text-lg/[1.8]">{path}</p>
      </Link>
      {children && children.length > 0 && (
        <ul>
          {children.map((child) => (
            <li key={child.path} className="px-4 py-2">
              <Link href={child.href} className="hover:text-[#23CFCA]">
                <p>{child.path}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

const NavBar = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <nav className="bg-[#016194] text-[#23CFCA]">
      <Menu>
        <div className="container">
          <div className="flex justify-between items-center py-3">
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
                className="fixed z-10 right-0 left-[25%] md:left-[25%] top-0 bottom-0 h-[100vh] bg-[#383939]"
              >
                <div>
                  <div className="flex justify-between items-center p-3">
                    <Link href="#" className="text-[22px]/[1.8] font-bold">
                      <p>Computer & Laptop</p>
                    </Link>

                    <Menu.Button
                      onClick={() => setIsShowing(false)}
                      className="float-right"
                    >
                      <X className="w-10 h-10" />
                    </Menu.Button>
                  </div>

                  <ul className="flex flex-col p-3 text-[#f9f9f9]">
                    {navbarItems.map((item) => (
                      <NavbarLink key={item.path} {...item} />
                    ))}
                  </ul>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </Menu>
    </nav>
  );
};

export default NavBar;
