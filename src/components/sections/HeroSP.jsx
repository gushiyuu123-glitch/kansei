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
      className="relative min-h-[100svh] bg-[var(--paper)] overflow-hidden"
    >
      {/* 背景 */}
      <div
        className="absolute inset-0 scale-[1.04] -translate-y-[6vh]"
        style={{
          backgroundImage: "url(/images/hero/bg-spring1sp.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 陰影 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0) 42%, rgba(0,0,0,0.08) 100%)",
        }}
      />

      {/* 和紙 */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url(/images/texture/washi.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "420px 420px",
        }}
      />

      {/* =====================
          レイヤー構成
      ===================== */}
      <div className="relative z-10 h-full">

        {/* 店名：上固定 */}
        <h1
          data-anim
          className="
            absolute top-[18vh] left-1/2 -translate-x-1/2
            text-[2rem]
            tracking-[0.32em]
            opacity-80
          "
          style={{ fontFamily: "var(--jp-serif)" }}
        >
          甘静
        </h1>

        {/* 商品画像：重心 */}
        <div
          data-anim
          className="
            absolute top-[28vh] left-1/2 -translate-x-1/2
            w-[70vw] max-w-[300px]
            aspect-[3/4]
          "
        >
          <div
            className="absolute inset-0 rounded-[2px]"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 50%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 65%)",
            }}
          />
          <img
            src="/images/hero/hero-1sp.png"
            draggable={false}
            className="relative w-full h-full object-cover"
          />
        </div>

        {/* コピー：添える */}
        <p
          data-anim
          className="
            absolute top-[72vh] left-1/2 -translate-x-1/2
            text-[0.78rem]
            tracking-[0.06em]
            leading-[1.7]
            opacity-45
            text-center
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
