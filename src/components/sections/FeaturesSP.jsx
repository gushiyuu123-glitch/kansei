export default function FeaturesSP() {
  return (
    <section
      className="
        relative
        pt-[14vh]
        pb-[16vh]
        bg-[var(--paper)]
        text-[var(--ink)]
      "
      style={{ fontFamily: "var(--jp-serif)" }}
    >
      <div
        className="
          mx-auto
          max-w-[320px]
          px-6
          text-center
          text-[0.9rem]
          leading-[2.2]
          tracking-[0.04em]
        "
      >
        {/* block 1 */}
        <p className="opacity-85">
          菓子は、<br />
          毎日すべて並びません。
        </p>

        {/* block 2 */}
        <p className="mt-[3.2rem] opacity-65">
          その日の空気に合わせて、<br />
          必要な分だけを。
        </p>

        {/* block 3（芯） */}
        <p
          className="
            mt-[4.2rem]
            text-[1rem]
            tracking-[0.06em]
            opacity-95
          "
        >
          今日の出来を、大切にしています。
        </p>
      </div>
    </section>
  );
}
