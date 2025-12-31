// src/components/sections/Products.jsx
import { useEffect, useRef, useState } from "react";

export default function Products() {
  const rootRef = useRef(null);
  const [active, setActive] = useState("上生菓子");

  const categories = {
    上生菓子: [
      { name: "練り切り", price: "¥380", image: "/images/products/jonama.png" },
      { name: "きんとん", price: "¥360", image: "/images/products/kinton.png" },
      { name: "薯蕷饅頭", price: "¥400", image: "/images/products/joyomanju.png" },
    ],
    干菓子: [
      { name: "最中", price: "¥260", image: "/images/products/monaka.png" },
      { name: "落雁", price: "¥240", image: "/images/products/rakugan.png" },
    ],
    焼菓子: [
      { name: "羊羹", price: "¥420", image: "/images/products/yokan.png" },
      { name: "焼饅頭", price: "¥300", image: "/images/products/yakimanju.png" },
      { name: "カステラ", price: "¥320", image: "/images/products/castella.png" },
    ],
    季節菓子: [
      { name: "季節の上生", price: "¥400〜", image: "/images/products/seasonal.png" },
    ],
  };

  /* =====================
     呼吸：IntersectionObserver
  ===================== */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const items = el.querySelectorAll("[data-breath]");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-show");
          }
        });
      },
      {
        rootMargin: "-10% 0px",
        threshold: 0.15,
      }
    );

    items.forEach((item) => io.observe(item));
    return () => io.disconnect();
  }, [active]);

  return (
    <section id="products" data-nav="御菓子"
      ref={rootRef}
      className="relative py-[20vh] overflow-x-hidden"
    >
      <div className="relative max-w-[1100px] mx-auto px-6">

        {/* 縦タイトル（気配） */}
        <p
          className="
            writing-vertical-rl
            text-[0.8rem]
            tracking-[0.32em]
            opacity-45
            absolute
            right-[0.8rem]
            top-0
            select-none
            pointer-events-none
          "
          style={{ fontFamily: "var(--jp-serif)" }}
        >
          御菓子
        </p>

        {/* カテゴリ */}
        <div className="mb-20 flex justify-center gap-14">
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`
                text-[0.85rem]
                tracking-[0.18em]
                transition-opacity duration-700
                ${active === key ? "opacity-70" : "opacity-30"}
              `}
              style={{ fontFamily: "var(--jp-serif)" }}
            >
              {key}
            </button>
          ))}
        </div>

        {/* 商品陳列（呼吸） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-28">
          {categories[active].map((item, i) => (
            <div
              key={i}
              data-breath
              className={`
                space-y-6
                opacity-0 translate-y-[14px]
                transition-all duration-[1600ms]
                ease-[cubic-bezier(.22,.61,.36,1)]
                ${i === 1 ? "delay-[120ms]" : ""}
              `}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  draggable={false}
                  className="
                    w-full h-full object-cover
                    brightness-[0.98]
                  "
                />
              </div>

              <p
                className="text-[0.9rem] tracking-[0.08em] opacity-80"
                style={{ fontFamily: "var(--jp-serif)" }}
              >
                {item.name}
              </p>

              <p
                className="text-[0.75rem] tracking-[0.05em] opacity-45"
                style={{ fontFamily: "var(--jp-serif)" }}
              >
                {item.price}
              </p>
            </div>
          ))}
        </div>

      </div>

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
