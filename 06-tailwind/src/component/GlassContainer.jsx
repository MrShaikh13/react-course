export default function GlassContainer({ children }) {
  return (
    <div className="p-10 min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-400">
      <div className="
        w-[700px]
        p-10
        rounded-3xl
        backdrop-blur-xl
        bg-white/20
        border border-white/30
        shadow-2xl
      ">
        {children}
      </div>
    </div>
  );
}