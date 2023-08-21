"use client";

import { User } from "@prisma/client";
import { FC } from "react";
import Image from "next/image";
import useActiveList from "@/app/hooks/useActiveList";

interface AvatarProps {
  user?: User;
}

const Avatar: FC<AvatarProps> = ({ user }) => {
  const { members } = useActiveList();
  const isActive = members.includes(user?.email!);

  return (
    <div className="relative">
      <div
        className="
        relative
        inline-block
        rounded-full
        overflow-hidden
        h-9
        w-9
        md:h-11
        md:w-11
        "
      >
        <Image
          alt="Avatar"
          src={user?.image || "/images/placeholder.jpg"}
          fill
        />
      </div>
      {isActive && (
        <span
          className="
            absolute
            top-0
            right-0
            block
            rounded-full
            bg-green-500
            ring-2
            ring-white
            h-2
            w-2
            md:h-3
            md:w-3
          "
        />
      )}
    </div>
  );
};

export default Avatar;
