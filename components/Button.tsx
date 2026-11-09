interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  label,
  variant = "primary"
}: ButtonProps) {
  const baseStyle =
    "px-4 py-2 font-medium rounded-md";

  const variantStyle =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button className={`${baseStyle} ${variantStyle}`}>
      {label}
    </button>
  );
}