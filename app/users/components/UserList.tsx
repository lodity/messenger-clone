"use client";

import { User } from "@prisma/client";
import { FC } from "react";
import UserBox from "@/app/users/components/UserBox";

interface UserListProps {
  users: User[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <aside
      className="
      fixed
      inset-y-0
      pb-20
      overflow-y-auto
      border-r
      border-gray-200
      w-full
      left-0
      block
      lg:pb-0
      lg:left-20
      lg:w-80
      "
    >
      <div className="px-5">
        <div
          className="
            text-2xl
            font-bold
            text-neutral-800
            py-4
            "
        >
          People
        </div>
        {users.map((user) => (
          <UserBox key={user.id} user={user} />
        ))}
      </div>
    </aside>
  );
};

export default UserList;
