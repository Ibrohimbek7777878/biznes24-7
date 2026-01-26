export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const styles = {
    primary:
      "bg-bank-primary text-white hover:bg-blue-700 shadow-lg shadow-blue-200",
    secondary: "bg-white text-bank-primary border border-bank-primary",
    ghost: "bg-transparent text-bank-dark opacity-70",
  };

  return (
    <button
      className={`w-full py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
