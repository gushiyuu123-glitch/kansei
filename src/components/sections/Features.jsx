export default function Features() {
  return (
    <section id="features" data-nav="特徴"
      className="
        relative
        pt-[26vh] pb-[18vh]
        bg-[var(--paper)]
        overflow-hidden
      "
    >
      {/* 左：お茶の気配（切り抜き） */}
      <div className="absolute inset-y-0 left-0 w-[64vw] pointer-events-none">
        <img
          src="/images/tea/tea-cut1.png"
          alt=""
          className="
            absolute
            left-[20vw]
            top-[22vw]
            -translate-y-1/2
            w-[1100px]
            opacity-[0.65]
            select-none
          "
          style={{
            filter: "contrast(0.95) brightness(0.98)",
          }}
          draggable={false}
        />
      </div>

      {/* 右：言葉 */}
      <div
        className="
          relative
          mx-auto
          ml-[53vw]
          max-w-[520px]
          px-5
          text-[0.95rem]
          leading-[2.6]
          tracking-[0.04em]
          text-[var(--ink)]
          opacity-85
        "
        style={{ fontFamily: "var(--jp-serif)" }}
      >
<p>
  菓子は、毎日すべて並びません。
</p>

<p className="mt-[2.8rem] opacity-70">
  その日の空気に合わせて、
</p>

<p
  className="
    mt-[0.8rem]
    text-[1.05rem]
    tracking-[0.06em]
    opacity-95
  "
>
  必要な分だけを、お作りしています。
</p>

<p className="mt-[3.2rem] opacity-8">
  創業年数よりも、
</p>

<p className="mt-[0.4rem]">
  今日の出来を、大切にしています。
</p>

      </div>
    </section>
  );
}
