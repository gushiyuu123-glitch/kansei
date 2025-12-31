import { useEffect, useRef, useState } from "react";

export default function GiftSet() {
  const rootRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const items = [
    {
      name: "初夏の重箱",
      price: "六個入　¥3,200",
      image: "/images/gift/jubako-early-summer-1.png",
    },
    {
      name: "初夏の重箱（二段）",
      price: "八個入　¥4,800",
      image: "/images/gift/jubako-early-summer-2.png",
    },
    {
      name: "初夏の重箱（特）",
      price: "十二個入　¥6,400",
      image: "/images/gift/jubako-early-summer-3.png",
    },
  ];

  /* =====================
     呼吸（IntersectionObserver）
  ===================== */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-show");
        }
      },
      {
        threshold: 0.2,
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        relative
        pt-[22vh] pb-[24vh]
        bg-[var(--paper)]
        opacity-0 translate-y-[12px]
        transition-all duration-[1800ms]
        ease-[cubic-bezier(.22,.61,.36,1)]
      "
    >
      <div className="h-[8vh]" />

      {/* 季節ラベル */}
      <div
        className="
          mx-auto max-w-[520px] px-6
          text-center text-[0.8rem]
          tracking-[0.28em] opacity-60
        "
        style={{ fontFamily: "var(--jp-serif)" }}
      >
        ─ 季節の贈りもの ─
      </div>

      <h3
        className="
          mt-[1.6rem]
          text-center text-[1.15rem]
          tracking-[0.18em]
        "
        style={{ fontFamily: "var(--jp-serif)" }}
      >
        初夏の重箱
      </h3>

      {/* 説明 */}
      <p
        className="
          mt-[3.2rem] mx-auto max-w-[520px] px-6
          text-center text-[0.9rem]
          leading-[2.6] tracking-[0.04em]
          opacity-75
        "
        style={{ fontFamily: "var(--jp-serif)" }}
      >
        その季節にしか作らない菓子を、
        <br />
        静かに詰めました。
        <br /><br />
        ご挨拶やお礼など、
        <br />
        気持ちを添えたい場面に。
      </p>

      {/* 商品画像 */}
      <div
        className="
          mt-[9vh]
          mx-auto max-w-[1100px] px-6
          grid grid-cols-1 md:grid-cols-3
          gap-x-12 gap-y-16
        "
      >
        {items.map((item, i) => {
          const isActive = activeIndex === i;

          return (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className="
                cursor-pointer
                transition-transform duration-[900ms]
                hover:translate-y-[-2px]
              "
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  draggable={false}
                  className={`
                    w-full h-full object-cover
                    transition-opacity duration-[900ms]
                    ${isActive ? "opacity-[0.95]" : "opacity-[0.72]"}
                  `}
                />
              </div>

              <div
                className={`
                  mt-[3vh] text-center
                  transition-all duration-[1200ms]
                  ${isActive ? "opacity-80 translate-y-0" : "opacity-0 translate-y-[6px]"}
                `}
                style={{ fontFamily: "var(--jp-serif)" }}
              >
                <p className="text-[0.95rem] tracking-[0.06em]">
                  {item.name}
                </p>
              </div>

              <div
                className={`
                  mt-[1.2rem] text-center
                  transition-all duration-[1400ms]
                  ${isActive ? "opacity-55 translate-y-0" : "opacity-0 translate-y-[6px]"}
                `}
                style={{ fontFamily: "var(--jp-serif)" }}
              >
                <p className="text-[0.85rem] tracking-[0.06em]">
                  {item.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <p
        className="
          mt-[6vh]
          text-center text-[0.7rem]
          tracking-[0.2em]
          opacity-35
        "
        style={{ fontFamily: "var(--jp-serif)" }}
      >
        ※ 画像を選択できます
      </p>

      {/* 呼吸ON */}
      <style>{`
        .is-show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
