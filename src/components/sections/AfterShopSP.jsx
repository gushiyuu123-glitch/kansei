import { useEffect, useRef } from "react";

export default function AfterShopSP() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    el.classList.add("is-show");
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative
        bg-[var(--paper)]
        pt-[18vh]
        pb-[22vh]
        opacity-0 translate-y-[10px]
        transition-all duration-[1600ms]
        ease-[cubic-bezier(.22,.61,.36,1)]
      "
      style={{ fontFamily: "var(--jp-serif)" }}
    >
      <p
        className="
          mx-auto max-w-[320px] px-6
          text-center text-[0.9rem]
          leading-[2.6]
          tracking-[0.06em]
          opacity-65
        "
      >
        はじめての方も、
        <br />
        どうぞ、急がずに。
      </p>

      <p
        className="
          mt-[4vh]
          text-center text-[0.8rem]
          tracking-[0.08em]
          opacity-45
        "
      >
        特別な日でなくても、構いません。
      </p>

      <style>{`
        .is-show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
