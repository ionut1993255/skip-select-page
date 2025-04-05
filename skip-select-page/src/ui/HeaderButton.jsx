import Icon from "./Icon";

function HeaderButton({
  icon,
  text,
  disabled = false,
  className = "",
  iconClass = "",
  textClass = "",
}) {
  return (
    <button
      disabled={disabled}
      className={`flex items-center whitespace-nowrap transition-colors ${disabled ? "text-white/60 cursor-not-allowed opacity-50" : "text-[#0037C1] cursor-pointer hover:text-[#0037C1]"} ${className}`}
    >
      <Icon icon={icon} className={iconClass} />

      <span
        className={`ml-2 mr-[1rem] text-white text-[17px] font-semibold ${textClass}`}
      >
        {text}
      </span>
    </button>
  );
}

export default HeaderButton;
