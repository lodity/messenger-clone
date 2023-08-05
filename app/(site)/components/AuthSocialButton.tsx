import { IconType } from "react-icons";
import { FC } from "react";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
      flex
      w-full
      items-center
      justify-center
      rounded-md
      bg-white
      px-4
      py-2
      text-gray-500
      ring-1
      ring-inset
      ring-gray-300
      hover:bg-gray-50
      focus:outline-offset-0"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
