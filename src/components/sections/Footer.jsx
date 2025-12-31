// src/components/sections/Footer.jsx
export default function Footer() {
  return (
    <footer
      className="relative bg-[var(--paper)] pt-[18vh] pb-[10vh]"
      itemScope
      itemType="https://schema.org/Bakery"
    >
      <div
        className="
          mx-auto
          max-w-[680px]
          px-6
          text-center
          text-[0.8rem]
          leading-[2.6]
          tracking-[0.12em]
          text-[var(--ink)]
        "
        style={{ fontFamily: "var(--jp-serif)" }}
      >
        {/* 店名 */}
        <p
          className="tracking-[0.22em] opacity-75"
          itemProp="name"
        >
          甘静
        </p>

        {/* 住所 */}
        <p
          className="mt-[2.2rem] opacity-65"
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
        <p className="mt-[2.2rem] opacity-65">
          <span itemProp="openingHours">10:00 − 18:00</span><br />
          定休日　水曜日
        </p>

        {/* 補足 */}
        <p className="mt-[3rem] text-[0.7rem] opacity-45">
          ※ 商品は日によって内容が異なります
        </p>
      </div>

      {/* 制作クレジット（気配） */}
      <div
        className="
          absolute
          left-1/2
          bottom-[4vh]
          -translate-x-1/2
          text-[0.65rem]
          tracking-[0.18em]
          opacity-30
        "
        style={{ fontFamily: "var(--jp-serif)" }}
      >
        <a
          href="https://gushikendesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
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
              "url": "https://gushikendesign.com/"
            }
          }),
        }}
      />
    </footer>
  );
}
