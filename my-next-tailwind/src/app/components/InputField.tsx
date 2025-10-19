"use client";

interface InputFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function InputField({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-[16px] font-medium text-gray-700"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-themeColor-500 focus:border-themeColor-500 transition-all text-gray-950"
      />
    </div>
  );
}
