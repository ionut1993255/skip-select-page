function Button({ children, disabled = false, className = "" }) {
  return (
    <button
      disabled={disabled}
      className={`flex items-center whitespace-nowrap transition-colors 
        ${disabled ? "text-white/60 cursor-not-allowed opacity-50" : "text-[#0037C1] cursor-pointer hover:text-[#0037C1]"}
        ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
