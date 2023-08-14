import { FC } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

const MessageInput: FC<MessageInputProps> = ({
  id,
  register,
  errors,
  placeholder,
  required,
  type,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
        text-black
        py-2
        px-4
        bg-neutral-100
        w-full
        rounded-full
        focus:outline-none
        "
      />
    </div>
  );
};

export default MessageInput;
