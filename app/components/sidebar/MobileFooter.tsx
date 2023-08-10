"use client";

import useRoutes from "@/app/hooks/useRoutes";
import useConversation from "@/app/hooks/useConversation";
import MobileItem from "@/app/components/sidebar/MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div
      className="
      fixed
      flex
      justify-between
      items-center
      w-full
      bottom-0
      z-40
      bg-white
      border-t-[1px]
      lg:hidden
      "
    >
      {routes.map((route) => (
        <MobileItem key={route.href} {...route} />
      ))}
    </div>
  );
};

export default MobileFooter;
