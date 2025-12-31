import { useEffect, useRef } from "react";

export default function AfterShop() {
  const centerRef = useRef(null);
  const signRef = useRef(null);

  useEffect(() => {
    const center = centerRef.current;
    const sign = signRef.current;
    if (!center || !sign) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          center.classList.add("is-show");

          // 拝啓は少し遅れて一礼
          setTimeout(() => {
            sign.classList.add("is-show");
          }, 600);

          io.disconnect(); // 一度きり
        }
      },
      { threshold: 0.45 }
    );

    io.observe(center);
    return () => io.disconnect();
  }, []);

  return (
   <section
  className="
    relative
    bg-[var(--paper)]
    pt-[36vh]
    pb-[26vh]
    overflow-hidden
  "
>

      
      {/* =====================
          中央・余韻の縦文字
      ===================== */}
      <div
        ref={centerRef}
        className="
          mx-auto
          w-fit
          writing-vertical-rl
          text-orientation-mixed
          text-[0.85rem]
          leading-[2.8]
          tracking-[0.32em]
          text-[var(--ink)]
          opacity-0
          translate-y-[14px]
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(.22,.61,.36,1)]
        "
        style={{ fontFamily: "var(--jp-serif)" }}
      >
        <p className="opacity-70">
          はじめての方も、
          <br />
          どうぞ、急がずに。
        </p>

        <p className="mt-[4vh] opacity-55">
          特別な日でなくても、
          <br />
          構いません。
        </p>
      </div>

      {/* =====================
          左下・締めの拝啓
      ===================== */}
      <div
        ref={signRef}
        className="
          absolute
          left-[10vw]
          bottom-[10vh]
          writing-vertical-rl
          pointer-events-none
          opacity-0
          translate-y-[8px]
          transition-all
          duration-[900ms]
          ease-[cubic-bezier(.22,.61,.36,1)]
        "
        style={{
          fontFamily: "var(--jp-serif)",
          textOrientation: "mixed",
        }}
      >
        {/* 縦アンカー（視線の柱） */}
        <span
          className="absolute left-[-14px] top-[-2vh] h-[18vh] w-[1px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.25), rgba(0,0,0,0))",
            opacity: 0.25,
          }}
        />


        {/* 本文（手前） */}
        <span
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.18em",
            lineHeight: "2.2",
            opacity: 0.55,
          }}
        >
          拝啓
          <br />
          甘静
        </span>
      </div>

      {/* 表示制御 */}
      <style>{`
        .is-show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
