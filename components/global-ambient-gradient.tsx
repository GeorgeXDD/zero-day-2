export function GlobalAmbientGradient() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Midnight Twilight Base Canvas */}
      <div className="absolute inset-0 bg-[#07020d]" />

      {/* 2. Full-Page Vertical Dusk Gradient (Sampled directly from GTA 6 sunset dusk photo) */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#07020d_0%,rgba(126,113,165,0.20)_16%,rgba(193,133,169,0.26)_42%,rgba(240,156,147,0.30)_66%,rgba(253,157,126,0.22)_86%,#07020d_100%)] opacity-90" />

      {/* 3. Upper Dusk Lavender & Warm Rose Glow Bloom */}
      <div className="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[120vw] h-[65vh] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(193,133,169,0.24)_0%,rgba(126,113,165,0.18)_45%,transparent_75%)] blur-[130px]" />

      {/* 4. Lower Warm Golden Peach & Sunset Coral Horizon Bloom */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[130vw] h-[60vh] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(253,157,126,0.28)_0%,rgba(240,156,147,0.22)_35%,rgba(193,133,169,0.12)_65%,transparent_80%)] blur-[140px]" />

      {/* 5. Mid-Page Ambient Soft Dusk Transition Bloom */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[110vw] h-[50vh] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(240,156,147,0.16)_0%,rgba(193,133,169,0.12)_40%,transparent_75%)] blur-[130px]" />

      {/* 6. Left Flank: Neon Rose-Pink Glow (#ff2a85) */}
      <div className="absolute top-[20%] -left-[18vw] w-[50vw] h-[65vh] rounded-full bg-[radial-gradient(circle,rgba(255,42,133,0.20)_0%,rgba(193,133,169,0.12)_45%,transparent_70%)] blur-[130px]" />
      <div className="absolute top-[65%] -left-[14vw] w-[45vw] h-[55vh] rounded-full bg-[radial-gradient(circle,rgba(255,42,133,0.16)_0%,transparent_70%)] blur-[120px]" />

      {/* 7. Right Flank: Electric Cyan & Twilight Sky Glow (#00f0ff) */}
      <div className="absolute top-[15%] -right-[18vw] w-[50vw] h-[65vh] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.16)_0%,rgba(126,113,165,0.14)_45%,transparent_70%)] blur-[130px]" />
      <div className="absolute top-[60%] -right-[14vw] w-[45vw] h-[55vh] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.15)_0%,transparent_70%)] blur-[120px]" />

      {/* 8. Global Central Contrast Shield (Ensures crisp readability for all text, badges and cards) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,2,13,0.5)_0%,rgba(7,2,13,0.18)_68%,transparent_100%)]" />

      {/* 9. Subtle Vice City Ambient Grid Texture */}
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,rgba(255,42,133,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </div>
  );
}
