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
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/hero/bg-spring1.png)",
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

      {/* 和紙テクスチャ */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
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
          "
          style={{ fontFamily: "var(--jp-serif)" }}
        >
          甘静
        </h1>

        {/* 菓子（視覚の芯） */}
        <div
          data-anim
          className="
            w-[68vw]
            max-w-[300px]
            aspect-[3/4]
          "
        >
          <img
            src="/images/hero/hero-1.png"
            alt=""
            draggable={false}
            className="
              w-full h-full object-cover
              rounded-[2px]
              shadow-[0_5px_16px_rgba(0,0,0,0.055)]
            "
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
