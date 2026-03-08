export function LiquidButton({ children, color }) {
  return (
    <button
      className={`
      px-6 py-3
      rounded-full
      text-white
      backdrop-blur-lg
      shadow-lg
      border border-white/30
      ${color}
      hover:scale-105
      transition
    `}
    >
      {children}
    </button>
  );
}