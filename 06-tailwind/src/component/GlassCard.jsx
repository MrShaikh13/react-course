export function GlassCard({ children }) {
  return (
    <div className="
      p-6
      rounded-2xl
      bg-white/15
      backdrop-blur-lg
      border border-white/20
      shadow-xl
    ">
      {children}
    </div>
  );
}