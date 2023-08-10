"use client";

import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps {
  icon: any;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: FC<MobileItemProps> = ({
  icon: Icon,
  href,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        `
      group
      flex
      justify-center
      gap-x-3
      text-sm
      leading-6
      font-semibold
      w-full
      p-4
      text-gray-500
      hover:text-black
      hover:bg-gray-100`,
        active && "bg-gray-100 text-black"
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
