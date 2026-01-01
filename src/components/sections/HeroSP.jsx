import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSP() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-anim]"),
      { opacity: 0, y: 8 },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: "power2.out",
        stagger: 0.18,
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative
        min-h-[100svh]
        bg-[var(--paper)]
        overflow-hidden
      "
    >
      {/* =====================
          背景（季節）
      ===================== */}
  {/* ① 季節の写真（情報） */}
  <div
    className="
      absolute inset-0
      scale-[1.04]
      -translate-y-[6vh]
    "
    style={{
      backgroundImage: "url(/images/hero/bg-spring1sp.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

      {/* 陰影（上下だけ） */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 42%, rgba(0,0,0,0.06) 100%)",
        }}
      />

  {/* ② 視線制御（空気の沈み） */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `
        radial-gradient(
          70% 55% at 50% 45%,
          rgba(0,0,0,0.05) 0%,
          rgba(0,0,0,0.02) 38%,
          rgba(0,0,0,0) 65%
        ),
        linear-gradient(
          180deg,
          rgba(0,0,0,0.10) 0%,
          rgba(0,0,0,0) 40%,
          rgba(0,0,0,0.08) 100%
        )
      `,
    }}
  />
      {/* 和紙テクスチャ */}
  <div
    className="
      absolute inset-0
      opacity-[0.07]
      mix-blend-multiply
      pointer-events-none
    "
    style={{
      backgroundImage: "url(/images/texture/washi.png)",
      backgroundRepeat: "repeat",
      backgroundSize: "420px 420px",
    }}
  />

      {/* =====================
          中央レイヤー（芯）
      ===================== */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

        {/* 店名 */}
        <h1
          data-anim
          className="
            mb-[6vh]
            text-[2.1rem]
            tracking-[0.32em]
            opacity-85
            -translate-y-[-7vh]
          "
          style={{ fontFamily: "var(--jp-serif)" }}
        >
          甘静
        </h1>
<div
  data-anim
  className="
    w-[68vw]
    max-w-[300px]
    aspect-[3/4]
    relative
  "
>
  {/* 空気の層（カード感消し） */}
  <div
    className="absolute inset-0 rounded-[2px]"
    style={{
      background:
        "radial-gradient(60% 50% at 50% 50%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 65%)",
    }}
  />

  <img
    src="/images/hero/hero-1sp.png"
    draggable={false}
    className="relative  w-full h-full object-cover -translate-y-[-2vh]"
  />
</div>


        {/* コピー */}
        <p
          data-anim
          className="
            mt-[6vh]
            text-[0.85rem]
            tracking-[0.04em]
            opacity-50
            text-center
            leading-[1.9]
          "
          style={{ fontFamily: "var(--jp-serif)" }}
        >
          <span className="block">その日の菓子を、</span>
          <span className="block">つくっています。</span>
        </p>

      </div>
    </section>
  );
}
