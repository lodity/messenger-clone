"use client";

import { FullMessageType } from "@/app/types";
import { FC, useState } from "react";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import Avatar from "@/app/components/Avatar";
import { format } from "date-fns";
import Image from "next/image";
import ImageModal from "@/app/conversations/[conversationId]/components/ImageModal";

interface MessageBoxProps {
  message: FullMessageType;
  isLast?: boolean;
}

const MessageBox: FC<MessageBoxProps> = ({ message, isLast }) => {
  const session = useSession();
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const isOwn = session?.data?.user?.email === message?.sender?.email;
  const seenList = (message.seen || [])
    .filter((user) => user.email !== message?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  const containerClasses = clsx("flex gap-3 p-4", isOwn && "justify-end");
  const avatarClasses = clsx(isOwn && "order-2");
  const bodyClasses = clsx("flex flex-col gap-2", isOwn && "items-end");
  const messageClasses = clsx(
    "text-sm w-fit overflow-hidden",
    isOwn ? "bg-sky-500 text-white" : "bg-gray-100",
    message.image ? "rounded-md p-0" : "rounded-full py-2 px-3"
  );

  return (
    <div className={containerClasses}>
      <div className={avatarClasses}>
        <Avatar user={message.sender} />
      </div>
      <div className={bodyClasses}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">{message.sender.name}</div>
          <div className="text-xs text-gray-400">
            {format(new Date(message.createdAt), "p")}
          </div>
        </div>
        <div className={messageClasses}>
          <ImageModal
            src={message.image}
            isOpen={imageModalOpen}
            onClose={() => setImageModalOpen(false)}
          />
          {message.image ? (
            <Image
              onClick={() => setImageModalOpen(true)}
              alt="Image"
              src={message.image}
              width="288"
              height="288"
              className="
              object-cover
              cursor-pointer
              hover:scale-110
              transition
              "
            />
          ) : (
            <div>{message.body}</div>
          )}
        </div>
        {isLast && isOwn && seenList.length > 0 && (
          <div
            className="
            text-xs
            font-light
            text-gray-500
            "
          >{`Seen by ${seenList}`}</div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
