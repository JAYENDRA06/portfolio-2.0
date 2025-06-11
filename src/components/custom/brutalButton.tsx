export default function BrutalButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`cursor-pointer bg-brutal-background rounded-full px-4 py-2 lg:px-8 lg:py-3 border-2 font-semibold border-black shadow-[3px_3px_0_0_#000] transition duration-200 hover:shadow-none hover:translate-x-1 hover:translate-y-1 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}