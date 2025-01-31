import * as React from "react";

interface FormProps {
  label: string;
  type: string;
  placeholder?: string;
  hasIcon?: boolean;
}

const FormInput: React.FC<FormProps> = ({
  label,
  type,
  placeholder,
  hasIcon,
}) => {
  const inputId = `${label.toLowerCase()}-input`;

  return (
    <div className="flex flex-col mt-4 w-full">
      <div className="flex flex-col w-full">
        <label
          htmlFor={inputId}
          className="flex-1 shrink px-4 w-full text-xs tracking-wide leading-none whitespace-nowrap text-zinc-800">
          {label}
        </label>
        <div className="flex flex-col mt-2 w-full">
          <div className="flex overflow-hidden flex-col w-full rounded-md border-solid bg-zinc-100 border-[0.5px] border-neutral-200">
            <div className="flex gap-10 justify-between items-center py-2 pr-2 pl-4 w-full rounded-md">
              {type === "textarea" ? (
                <textarea
                  id={inputId}
                  placeholder={placeholder}
                  className="flex-1 bg-transparent border-none resize-none h-32"
                  aria-label={label}
                />
              ) : (
                <input
                  id={inputId}
                  type={type}
                  placeholder={placeholder}
                  className="flex-1 bg-transparent border-none"
                  aria-label={label}
                />
              )}
              {hasIcon && (
                <div className="flex gap-4 items-start self-stretch p-2 my-auto w-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a9ff6c49282d6f12dd424371d959e426a6e36020a77c47a859e039b8739d4b6?placeholderIfAbsent=true&apiKey=87e86c06f03c432689bbbefb00cd13e8"
                    alt=""
                    className="object-contain w-4 aspect-square"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
