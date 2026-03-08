import GlassContainer from "./component/GlassContainer";
import { LiquidButton } from "./component/LiquidButton";
import { GlassCard } from "./component/GlassCard";

const App = () => {
   return (
    <GlassContainer>
      <h1 className="text-xl font-semibold mb-6">
        Liquid Glass Kit
      </h1>

      <div className="flex gap-4 mb-8">
        <LiquidButton color="bg-purple-500/40">
          Secondary
        </LiquidButton>

        <LiquidButton color="bg-green-400/40">
          Primary
        </LiquidButton>
      </div>

      <GlassCard>
        <p className="text-sm opacity-80">
          Invite member
        </p>
        <button className="mt-3 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md ">
          Upgrade plan
        </button>
      </GlassCard>
    </GlassContainer>
  );
}

export default App
