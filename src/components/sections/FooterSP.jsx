// src/components/sections/FooterSP.jsx
export default function FooterSP() {
  return (
    <footer
      className="
        relative
        bg-[var(--paper)]
        pt-[14vh]
        pb-[10vh]
      "
      itemScope
      itemType="https://schema.org/Bakery"
      style={{ fontFamily: "var(--jp-serif)" }}
    >
      <div
        className="
          mx-auto
          max-w-[360px]
          px-6
          text-center
          text-[0.75rem]
          leading-[2.4]
          tracking-[0.1em]
          text-[var(--ink)]
        "
      >
        {/* 店名（最後の記憶） */}
        <p
          className="
            tracking-[0.24em]
            opacity-70
            mb-[3.2rem]
          "
          itemProp="name"
        >
          甘静
        </p>

        {/* 住所 */}
        <p
          className="
            opacity-55
            text-[0.7rem]
          "
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <span itemProp="postalCode">〒000-0000</span><br />
          <span itemProp="addressRegion">〇〇県</span>
          <span itemProp="addressLocality">〇〇市</span>
          <span itemProp="streetAddress">〇〇町一丁目二番三号</span>
        </p>

        {/* 営業情報 */}
        <p
          className="
            mt-[1.8rem]
            opacity-55
            text-[0.7rem]
          "
        >
          <span itemProp="openingHours">10:00 − 18:00</span><br />
          定休日　水曜日
        </p>

        {/* 補足 */}
        <p
          className="
            mt-[3rem]
            text-[0.65rem]
            opacity-35
          "
        >
          ※ 商品は日によって内容が異なります
        </p>

        {/* 余韻の導線（SPのみ・非ナビ） */}
   <p
  onClick={() =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  className="
    mt-[8vh]
    text-[0.65rem]
    tracking-[0.18em]
    opacity-30
    cursor-pointer
    transition-all duration-[600ms] ease-out
    hover:opacity-45
    hover:tracking-[0.22em]
    active:opacity-55
  "
>
  ── もう一度、ゆっくり ──
</p>

      </div>

      {/* クレジット（SPはさらに控えめ） */}
      <div
        className="
          mt-[6vh]
          text-center
          text-[0.6rem]
          tracking-[0.16em]
          opacity-25
        "
      >
        <a
          href="https://gushikendesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-50 transition-opacity"
        >
          Designed by GUSHIKEN DESIGN
        </a>
      </div>

      {/* SEO用 WebSite 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "甘静",
            "url": "https://example.com",
            "creator": {
              "@type": "Person",
              "name": "GUSHIKEN DESIGN",
              "url": "https://gushikendesign.com/",
            },
          }),
        }}
      />
    </footer>
  );
}
