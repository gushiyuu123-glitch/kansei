import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ArtisanSP() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll("[data-anim]"),
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section
      ref={rootRef}
      className="
        bg-[var(--paper)]
        pt-[18vh]
        pb-[22vh]
        text-[var(--ink)]
      "
      style={{ fontFamily: "var(--jp-serif)" }}
    >
      <div className="mx-auto max-w-[360px] px-6">

        {/* 主役写真（手元） */}
        <div data-anim className="aspect-[3/4] overflow-hidden">
          <img
            src="/images/craftsman/main.png"
            alt="菓子をつくる職人の手元"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* テキスト */}
        <div data-anim className="mt-[3.2rem] text-center">
          <p
            className="text-[0.7rem] tracking-[0.32em] opacity-55 mb-6"
          >
            ─ 職人について ─
          </p>

          <p
            className="text-[0.95rem] tracking-[0.14em] opacity-85"
          >
            手は、毎日同じではありません。
          </p>

          <p
            className="mt-[1.8rem] text-[0.85rem] leading-[2.1] tracking-[0.04em] opacity-65"
          >
            その日の空気に合わせて、<br />
            仕上がりは少しずつ変わります。
          </p>
        </div>

        {/* 仕上がり写真 */}
        <div
          data-anim
          className="mt-[6vh] aspect-[16/9] overflow-hidden"
        >
          <img
            src="/images/craftsman/finish.png"
            alt="仕上がった和菓子"
            className="w-full h-full object-cover opacity-95"
            draggable={false}
          />
        </div>

        {/* 余韻 */}
        <p
          data-anim
          className="
            mt-[4.5rem]
            text-center
            text-[0.8rem]
            tracking-[0.18em]
            opacity-55
          "
        >
          その日の手が、<br />
          その日の菓子をつくります。
        </p>

      </div>
    </section>
  );
}
