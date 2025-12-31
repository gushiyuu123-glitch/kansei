import useBreathIn from "../../hooks/useBreathIn";

export default function Craftsman() {
  const mainRef = useBreathIn();
  const textRef = useBreathIn({ threshold: 0.4 });
  const finishRef = useBreathIn({ threshold: 0.2 });
  const lineRef = useBreathIn({ threshold: 0.15 });

  return (
    <section id="artisan" data-nav="職人" className="relative bg-[var(--paper)] pt-[26vh] pb-[32vh]">
      <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-12 gap-y-28">

        {/* 主役写真 */}
        <div ref={mainRef} className="breath md:col-span-6 md:col-start-1">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="/images/craftsman/main.png"
              alt="菓子をつくる職人の手元"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>

        {/* 思想テキスト */}
        <div
          ref={textRef}
          className="breath md:col-span-4 md:col-start-8 flex flex-col justify-center"
        >
          <p
            className="text-[0.75rem] tracking-[0.32em] opacity-55 mb-6"
            style={{ fontFamily: "var(--jp-serif)" }}
          >
            ─ 職人について ─
          </p>

          <h3
            className="text-[1.05rem] tracking-[0.18em] mb-10"
            style={{ fontFamily: "var(--jp-serif)" }}
          >
            手は、毎日同じではありません。
          </h3>

          <p
            className="text-[0.95rem] leading-[2.6] tracking-[0.04em] opacity-80"
            style={{ fontFamily: "var(--jp-serif)" }}
          >
            気温や湿度、<br />
            その日の空気に合わせて、<br />
            形や仕上がりは少しずつ変わります。
            <br /><br />
            だから私たちは、<br />
            昨日と同じものを作ろうとはしません。
          </p>
        </div>

        {/* フィニッシュ写真 */}
        <div
          ref={finishRef}
          className="breath md:col-span-8 md:col-start-3 md:mt-[20vh]"
        >
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src="/images/craftsman/finish.png"
              alt="仕上がった和菓子と静かな作業台"
              className="w-full h-full object-cover opacity-95"
              draggable={false}
            />
          </div>
        </div>

        {/* 余韻の一文 */}
        <div
          ref={lineRef}
          className="breath md:col-span-4 md:col-start-5 md:mt-[10vh] text-center"
        >
          <p
            className="text-[0.8rem] tracking-[0.18em] opacity-55"
            style={{ fontFamily: "var(--jp-serif)" }}
          >
            その日の手が、その日の菓子をつくります。
          </p>
        </div>

      </div>
    </section>
  );
}
