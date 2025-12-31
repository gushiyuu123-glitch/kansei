import { useEffect, useRef } from "react";

export default function ShopSP() {
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
        pt-[22vh] pb-[26vh]
        bg-[var(--paper)]
        opacity-0 translate-y-[14px]
        transition-all duration-[1600ms]
        ease-[cubic-bezier(.22,.61,.36,1)]
      "
      style={{ fontFamily: "var(--jp-serif)" }}
    >
{/* 店内写真（主・フルワイド） */}
<div className="w-full">
  <div className="aspect-[4/5] overflow-hidden">
    <img
      src="/images/shop/detail1.png"
      alt="甘静 店内"
      draggable={false}
      className="w-full h-full object-cover brightness-[0.9]"
    />
  </div>
</div>


      {/* テキスト（気配） */}
      <div className="mt-[6vh] px-6 text-center">
        <p
          className="
            text-[0.65rem]
            tracking-[0.36em]
            opacity-45
            mb-[1.4rem]
          "
        >
          ─ 店について ─
        </p>

        <h3
          className="
            text-[1.05rem]
            tracking-[0.22em]
            leading-[1.9]
            opacity-75
          "
        >
          静けさの中に、
          <br />
          季節の気配を。
        </h3>
      </div>

      {/* 余韻 */}
      <p
        className="
          mt-[7vh]
          text-center
          text-[0.75rem]
          tracking-[0.18em]
          opacity-45
        "
      >
        旅の途中にも、甘静があります。
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
