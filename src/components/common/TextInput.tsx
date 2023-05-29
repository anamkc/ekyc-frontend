type TextInputProps = {
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  icon: React.ReactNode;
  placeholder: string;
  type: "text" | "email" | "password" | "number";
  additionalProp?: any;
};

const TextInput = (props: TextInputProps) => {
  const { isFocused, setIsFocused, icon, type, placeholder, additionalProp } = props;
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="w-full relative">
      <input
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="w-full p-2 py-[10px] border-4 border-light focus:border-white rounded-lg bg-transparent focus:text-white text-light relative pl-12 outline-none focus:outline-none"
        {...additionalProp}
      />
      <span
        className={` text-2xl top-[14px] absolute left-2 border-r-2 pr-2 ${
          isFocused ? "text-white border-white" : "text-light border-light"
        }`}
      >
        {icon}
      </span>
    </div>
  );
};

export default TextInput;
