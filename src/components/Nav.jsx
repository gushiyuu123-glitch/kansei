import { useEffect, useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(null);

useEffect(() => {
  const sections = document.querySelectorAll("[data-nav]");
  if (!sections.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // 👇 Hero は active にしない
        if (entry.target.id === "hero") {
          setActive(null);
          return;
        }

        setActive(entry.target.id);
      });
    },
    {
      // ★ 判定を「章の芯」に寄せる
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    }
  );

  sections.forEach((sec) => io.observe(sec));
  return () => io.disconnect();
}, []);


  const handleClick = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed right-[4vw] top-1/2 -translate-y-1/2 z-50">
      <ul className="space-y-6 text-[0.7rem] tracking-[0.28em]">
        {[
          { id: "features", label: "特徴" },
          { id: "artisan", label: "職人" },
          { id: "products", label: "御菓子" },
          { id: "shop", label: "店" },
        ].map((item) => (
          <li
            key={item.id}
            className={`
              transition-opacity duration-700
              ${active === item.id ? "opacity-60" : "opacity-25"}
            `}
          >
            <button
              onClick={() => handleClick(item.id)}
              className="
                appearance-none
                bg-transparent
                border-0
                p-0
                text-inherit
                tracking-inherit
                cursor-pointer
              "
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
