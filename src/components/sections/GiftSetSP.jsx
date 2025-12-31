import { useEffect, useRef } from "react";

export default function GiftSetSP() {
  const rootRef = useRef(null);

  const item = {
    name: "初夏の重箱",
    price: "六個入　¥3,200〜",
    image: "/images/gift/jubako-early-summer-1.png",
  };

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
        pt-[20vh] pb-[26vh]
        bg-[var(--paper)]
        opacity-0 translate-y-[12px]
        transition-all duration-[1800ms]
        ease-[cubic-bezier(.22,.61,.36,1)]
      "
      style={{ fontFamily: "var(--jp-serif)" }}
    >
      {/* 季節ラベル */}
      <p
        className="
          text-center text-[0.8rem]
          tracking-[0.28em] opacity-60
        "
      >
        ─ 季節の贈りもの ─
      </p>

      {/* タイトル */}
      <h3
        className="
          mt-[1.6rem]
          text-center text-[1.1rem]
          tracking-[0.18em]
        "
      >
        初夏の重箱
      </h3>

      {/* 説明 */}
      <p
        className="
          mt-[3rem] mx-auto max-w-[320px] px-6
          text-center text-[0.9rem]
          leading-[2.4] tracking-[0.04em]
          opacity-75
        "
      >
        その季節にしか作らない菓子を、
        <br />
        静かに詰めました。
        <br /><br />
        ご挨拶やお礼など、
        <br />
        気持ちを添えたい場面に。

        
      </p>
{/* 注釈 */}
<div className="pb-[4.8rem] ">
  <p className="mt-[4.2rem] text-center text-[0.75rem] tracking-[0.14em] opacity-40">
    ※ 内容・組み合わせは数種類ございます
  </p>
</div>


{/* 商品画像 */}
<div className="mx-auto max-w-[320px] px-6 ">

        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt=""
            draggable={false}
            className="w-full h-full object-cover opacity-[0.95] "
          />
        </div>

        {/* 商品名 */}
        <p className="mt-[3.2rem] text-center text-[0.95rem] tracking-[0.06em] opacity-80">
          {item.name}
        </p>

        {/* 価格 */}
        <p className="mt-[1.3rem] text-center text-[0.85rem] tracking-[0.06em] opacity-55">
          {item.price}
        </p>
      </div>

      {/* 余韻 */}
      <p
        className="
          mt-[6.5vh]
          text-center text-[0.7rem]
          tracking-[0.18em]
          opacity-35
        "
      >
        ※ 内容は季節により異なります
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
