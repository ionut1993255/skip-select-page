function Divider({ color = "#2A2A2A", className = "" }) {
  return (
    <div className={`w-16 h-px bg-[${color}] mr-[1rem] ${className}`}></div>
  );
}

export default Divider;
