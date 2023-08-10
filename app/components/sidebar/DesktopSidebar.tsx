"use client";

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "@/app/components/sidebar/DesktopItem";

const DesktopSidebar = () => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="
      hidden
      lg:fixed
      lg:inset-y-0
      lg:left-0
      lg:z-40
      lg:w-20
      xl:px-6
      lg:overflow-y-auto
      lg:bg-white
      lg:border-r-[1px]
      lg:pb-4
      lg:flex
      lg:flex-col
      lg:justify-between
      "
    >
      <nav
        className="
        mt-4
        flex
        flex-col
        justify-betweens
        "
      >
        <ul
          role="list"
          className="
          flex
          flex-col
          items-center
          space-y-1
          "
        >
          {routes.map((route) => (
            <DesktopItem key={route.label} {...route} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
