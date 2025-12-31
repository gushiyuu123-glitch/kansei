import { useEffect, useRef, useState } from "react";

export default function ProductsSP() {
  const rootRef = useRef(null);
  const [active, setActive] = useState("上生菓子");

  const categories = {
    上生菓子: [
      { name: "練り切り", price: "¥380", image: "/images/products/jonama.png" },
      { name: "きんとん", price: "¥360", image: "/images/products/kinton.png" },
    ],
    干菓子: [
      { name: "最中", price: "¥260", image: "/images/products/monaka.png" },
      { name: "落雁", price: "¥240", image: "/images/products/rakugan.png" },
    ],
    焼菓子: [
      { name: "羊羹", price: "¥420", image: "/images/products/yokan.png" },
      { name: "焼饅頭", price: "¥300", image: "/images/products/yakimanju.png" },
    ],
    季節菓子: [
      { name: "季節の上生", price: "¥400〜", image: "/images/products/seasonal.png" },
    ],
  };

  /* 呼吸（初回のみ） */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const items = el.querySelectorAll("[data-breath]");
    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 120}ms`;
      item.classList.add("is-show");
    });
  }, [active]);

  return (
    <section
      ref={rootRef}
      className="relative pt-[16vh] pb-[22vh] bg-[var(--paper)] overflow-hidden"
      style={{ fontFamily: "var(--jp-serif)" }}
    >
                {/* 縦タイトル */}
<p
  className="
    writing-vertical-rl
    text-[0.75rem]
    tracking-[0.32em]
    opacity-45
    absolute
    left-1/2
    -translate-x-1/2
    top-[1.5rem]
    pointer-events-none
  "
>
  御菓子
</p>


      <div className="relative max-w-[360px] mx-auto px-6">



        {/* カテゴリ（横スクロール） */}
        <div className="mb-[12vh] overflow-x-auto no-scrollbar">
          <div className="flex gap-10 px-1">
            {Object.keys(categories).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`
                  text-[0.85rem]
                  tracking-[0.26em]
                  whitespace-nowrap
                  transition-opacity duration-500
                  ${active === key ? "opacity-70" : "opacity-30"}
                `}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* 商品（縦1列） */}
        <div className="space-y-[10vh]">
          {categories[active].map((item, i) => (
            <div
              key={i}
              data-breath
              className="
                opacity-0 translate-y-[12px]
                transition-all duration-[1400ms]
                ease-[cubic-bezier(.22,.61,.36,1)]
              "
            >
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  draggable={false}
                  className="w-full h-full object-cover brightness-[0.98]"
                />
              </div>

              <p className="text-[0.9rem] tracking-[0.08em] opacity-80">
                {item.name}
              </p>

              <p className="mt-1 text-[0.75rem] tracking-[0.05em] opacity-45">
                {item.price}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .is-show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
