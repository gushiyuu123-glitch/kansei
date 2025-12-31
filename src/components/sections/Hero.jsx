import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

export default function Hero() {
  const rootRef = useRef(null);
  const bgBackRef = useRef(null);   // 奥（ぼかし）
  const bgFrontRef = useRef(null);  // 手前
  const [idx, setIdx] = useState(0);

  /* =====================
     前景：菓子画像
  ===================== */
  const images = useMemo(
    () => [
      "/images/hero/hero-1.png", // 春
      "/images/hero/hero-2.png", // 夏
      "/images/hero/hero-3.png", // 秋
      "/images/hero/hero-4.png", // 冬
    ],
    []
  );

  /* =====================
     背景：季節
  ===================== */
  const seasons = useMemo(
    () => [
      "/images/hero/bg-spring1.png",
      "/images/hero/bg-summer1.png",
      "/images/hero/bg-autumn2.png",
      "/images/hero/bg-winter.png",
    ],
    []
  );

  const slots = useMemo(
    () => [
      { right: "0%" },
      { right: "26%" },
      { right: "52%" },
      { right: "78%" },
    ],
    []
  );
/* =====================
   初期表示（完全静止）
===================== */
useEffect(() => {
  if (!bgBackRef.current || !bgFrontRef.current) return;

  bgBackRef.current.style.backgroundImage = `url(${seasons[0]})`;
  bgFrontRef.current.style.backgroundImage = `url(${seasons[0]})`;

  gsap.set(bgBackRef.current, { opacity: 0.18 });
  gsap.set(bgFrontRef.current, { opacity: 0.12 });

  const first = rootRef.current?.querySelector(`[data-card="0"]`);
  if (first) gsap.set(first, { opacity: 1 });
}, [seasons]);

/* =====================
   アニメーション本体（＋ループ制御）
===================== */
useEffect(() => {
  if (!bgBackRef.current || !bgFrontRef.current) return;
  const root = rootRef.current;
  if (!root) return;

  let current = 0;

  // 初期状態
  bgBackRef.current.style.backgroundImage = `url(${seasons[0]})`;
  bgFrontRef.current.style.backgroundImage = `url(${seasons[0]})`;

  gsap.set(bgBackRef.current, { opacity: 0.18 });
  gsap.set(bgFrontRef.current, { opacity: 0.12 });

  images.forEach((_, i) => {
    const card = root.querySelector(`[data-card="${i}"]`);
    if (card) gsap.set(card, { opacity: i === 0 ? 1 : 0 });
  });

  const loop = () => {
    const next = (current + 1) % images.length;

    const currentCard = root.querySelector(`[data-card="${current}"]`);
    const nextCard = root.querySelector(`[data-card="${next}"]`);

    const tl = gsap.timeline({
      onComplete: () => {
        current = next;
        loop();
      },
    });

    /* 見る時間（春だけ長い） */
    tl.to({}, { duration: current === 0 ? 1.7 : 1.4 });

    /* 背景フェードアウト */
    tl.to([bgBackRef.current, bgFrontRef.current], {
      opacity: 0,
      duration: 1.2,
      ease: "power1.out",
    });

    /* 背景差し替え */
    tl.call(() => {
      bgBackRef.current.style.backgroundImage = `url(${seasons[next]})`;
      bgFrontRef.current.style.backgroundImage = `url(${seasons[next]})`;
    });

    /* 前景フェードアウト */
    if (currentCard) {
      tl.to(
        currentCard,
        { opacity: 0, duration: 1.8, ease: "power1.out" },
        "<"
      );
    }

    /* 無音（冬だけ深く） */
    tl.to({}, { duration: current === 3 ? 0.8 : 0.4 });

    /* 前景フェードイン */
    if (nextCard) {
      tl.fromTo(
        nextCard,
        { opacity: 0, y: 4, scale: 0.996 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2.2,
          ease: "power1.out",
        }
      );
    }

    /* 背景フェードイン */
    tl.to(bgBackRef.current, {
      opacity: 0.18,
      duration: 1.6,
      ease: "power1.out",
    });

    tl.to(
      bgFrontRef.current,
      {
        opacity: 0.12,
        duration: 1.6,
        ease: "power1.out",
      },
      "<0.2"
    );
  };

  // 最初の起動
  const start = setTimeout(loop, 2000);

  return () => {
    clearTimeout(start);
    gsap.killTweensOf("*");
  };
}, [images, seasons]);


  return (
    <section id="hero" data-nav="hero"
      ref={rootRef}
      className="relative h-[100vh] min-h-[760px] bg-[var(--paper)] overflow-hidden"
    >
      {/* 季節背景（奥） */}
      <div
        ref={bgBackRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(14px)",
          transform: "scale(1.04)",
        }}
      />

      {/* 季節背景（手前） */}
      <div
        ref={bgFrontRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 陰影（明度差） */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.05) 100%)",
        }}
      />

      {/* 和紙（粗） */}
      <div
        className="absolute inset-0 opacity-[0.085] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url(/images/texture/washi.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "520px 520px",
          transform: "rotate(0.15deg)",
        }}
      />

      {/* 和紙（細） */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: "url(/images/texture/washi-fine.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* 店名 */}
      <div
        className="absolute right-[6vw] top-[8vh] text-[3.1rem] tracking-[0.42em] opacity-85 pointer-events-none"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          fontFamily: "var(--jp-serif)",
        }}
      >
        甘静
      </div>

      {/* 画像スロット */}
      <div
        className="absolute left-[52%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[1040px] h-[460px] pointer-events-none"
      >
        {images.map((src, i) => (
          <div
            key={src}
            data-card={i}
            className="absolute top-0 w-[26vw] max-w-[380px] min-w-[300px] aspect-[3/4] overflow-hidden rounded-[2px]"
            style={{
              ...slots[i],
              opacity: i === 0 ? 1 : 0,
              boxShadow:
                i === idx ? "0 4px 18px rgba(0,0,0,0.05)" : "none",
            }}
          >
            <img
              src={src}
              alt=""
              draggable={false}
              className="w-full h-full object-cover contrast-[1.02] brightness-[0.98]"
            />
          </div>
        ))}
      </div>

      {/* コピー */}
      <div
        className="absolute left-1/2 bottom-[8vh] -translate-x-1/2 text-[0.92rem] tracking-[0.06em] opacity-45 pointer-events-none"
        style={{ fontFamily: "var(--jp-serif)" }}
      >

        その日の菓子を、つくっています。
      </div>
    </section>
  );
}
