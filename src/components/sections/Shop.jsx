import { useEffect, useRef } from "react";

export default function Shop() {
  const wideRef = useRef(null);
  const detailRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-show");
          }
        });
      },
      {
        rootMargin: "-15% 0px",
        threshold: 0.1,
      }
    );

    if (wideRef.current) io.observe(wideRef.current);
    if (detailRef.current) io.observe(detailRef.current);

    return () => io.disconnect();
  }, []);

  return (
    <section id="shop" data-nav="店" className="relative bg-[var(--paper)] pt-[24vh] pb-[30vh] overflow-hidden">

      {/* =====================
          和紙テクスチャ（空気）
      ===================== */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[url('/texture/washi.png')]
          bg-repeat
          bg-[length:520px_520px]
          opacity-[0.14]
          mix-blend-multiply
        "
      />

      {/* =====================
          店舗（主）
      ===================== */}
      <div
        ref={wideRef}
        className="
          relative w-full h-[72vh] overflow-hidden
          opacity-0 translate-y-[18px]
          transition-all duration-[1800ms]
          ease-[cubic-bezier(.22,.61,.36,1)]
        "
      >
        <img
          src="/images/shop/detail1.png"
          alt="和菓子店の店内"
          className="
            w-full h-full object-cover
            scale-[1.04]
            brightness-[0.88]
          "
          draggable={false}
        />

        {/* 空気の膜 */}
        <div className="absolute inset-0 bg-black/18" />

        {/* テキスト */}
       {/* =====================
    テキスト（気配）
===================== */}
<div className="absolute inset-0 flex items-center pointer-events-none">
  <div className="ml-[8vw] relative">

    {/* 文字の“気配”レイヤー（カード化しない） */}
    <div
      className="
        absolute -left-6 -top-7
        w-[280px] h-[160px]
        bg-[rgba(251,250,247,0.16)]
        backdrop-blur-[0.5px]
      "
    />

    <div className="relative">
      <p
        className="
          mb-4
          text-[0.62rem]
          tracking-[0.42em]
          text-black/30
        "
        style={{ fontFamily: 'var(--jp-serif)' }}
      >
        ─ 店について ─
      </p>

      <h2
        className="
          text-black/70
          text-[1.3rem]
          tracking-[0.28em]
          leading-[1.7]
        "
        style={{ fontFamily: 'var(--jp-serif)' }}
      >
        静けさの中に、<br />
        季節の気配を。
      </h2>
    </div>

  </div>
</div>



      </div>

      {/* ===== 余白（時間） ===== */}
      <div className="h-[20vh]" />


      {/* =====================
          菓子（従）
      ===================== */}
      <div
        ref={detailRef}
        className="
          mx-auto max-w-[900px] px-6
          opacity-0 translate-y-[22px]
          transition-all duration-[1600ms] delay-[200ms]
          ease-[cubic-bezier(.22,.61,.36,1)]
        "
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src="/images/shop/wide1.png"
            alt="季節の上生菓子"
            className="w-full h-full object-cover opacity-95"
            draggable={false}
          />
        </div>

        {/* 余韻文 */}
        <p
          className="
            mt-10 text-center
            text-[0.75rem]
            tracking-[0.18em]
            opacity-55
          "
          style={{ fontFamily: "var(--jp-serif)" }}
        >
          旅の途中にも、甘静があります。
        </p>
      </div>
      {/* =====================
    脇役商品（左上・気配）
===================== */}
<div
  className="
    absolute top-[117vh] left-[10vw]
     w-[150px]
    opacity-[0.6]
    pointer-events-none
  "
>
  <div className="aspect-[4/3] overflow-hidden">
    <img
      src="/images/shop/product-sub2.png"
      alt="季節の上生菓子"
      className="
        w-full h-full object-cover
        brightness-[0.95]
        blur-[0.3px]
      "
      draggable={false}
    />
  </div>
</div>
        {/* =====================
            脇役商品（そっと）
        ===================== */}
        <div
          className="
            absolute bottom-[25vh] right-[6vw]
            w-[260px]
            opacity-85
            pointer-events-none
          "
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/images/shop/product-sub.png"
              alt="季節の上生菓子"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>
      {/* 表示クラス */}
      <style>{`
        .is-show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

    </section>
  );
}
