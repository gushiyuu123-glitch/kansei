import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSP() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-anim]"),
      { opacity: 0, y: 6 },
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
      className="relative h-[92vh] bg-[var(--paper)] overflow-hidden"
    >
      {/* 背景（季節） */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/hero/bg-spring1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 陰影 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.06) 100%)",
        }}
      />

      {/* 和紙 */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage: "url(/images/texture/washi.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "420px 420px",
        }}
      />

      {/* 菓子 */}
      <div
        data-anim
        className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[72vw] max-w-[320px] aspect-[3/4]"
      >
        <img
          src="/images/hero/hero-1.png"
          alt=""
          draggable={false}
          className="w-full h-full object-cover rounded-[2px] shadow-[0_5px_16px_rgba(0,0,0,0.055)]"
        />
      </div>

      {/* 店名 */}
      <div
        data-anim
        className="absolute top-[9vh] left-1/2 -translate-x-1/2 text-[2.2rem] tracking-[0.32em] opacity-85"
        style={{ fontFamily: "var(--jp-serif)" }}
      >
        甘静
      </div>

      {/* コピー */}
      <div
        data-anim
        className="absolute left-1/2 bottom-[8.5vh] -translate-x-1/2 text-[0.85rem] tracking-[0.04em] opacity-50 text-center leading-[1.9]"
        style={{ fontFamily: "var(--jp-serif)" }}
      >
        <span className="block">その日の菓子を、</span>
        <span className="block">つくっています。</span>
      </div>
    </section>
  );
}
