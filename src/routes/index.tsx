import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { tahMarkup } from "@/lib/tah-markup";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trust and Hope Rad Pvt. Ltd. — Teleradiology, Read Right." },
      {
        name: "description",
        content:
          "24x7 teleradiology reporting for hospitals and diagnostic centres across India — fast, accurate and secure radiology reports with multi-level QA.",
      },
      { property: "og:title", content: "Trust and Hope Rad Pvt. Ltd. — Teleradiology, Read Right." },
      {
        property: "og:description",
        content:
          "Fast, accurate and secure radiology reporting, 24 hours a day, 365 days a year. Advanced technology and an extensive radiologist panel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
      },
      { rel: "stylesheet", href: "/tah.css" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const form = document.getElementById("contact-form");
    const onSubmit = (e: Event) => {
      e.preventDefault();
      const msg = document.getElementById("form-msg");
      if (msg) msg.style.display = "block";
    };
    form?.addEventListener("submit", onSubmit);
    cleanups.push(() => form?.removeEventListener("submit", onSubmit));

    const burger = document.getElementById("burger-btn");
    const drawer = document.getElementById("mobile-drawer");
    if (burger && drawer) {
      const toggle = () => {
        burger.classList.toggle("active");
        drawer.classList.toggle("open");
      };
      burger.addEventListener("click", toggle);
      cleanups.push(() => burger.removeEventListener("click", toggle));
      drawer.querySelectorAll("a").forEach((a) => {
        const close = () => {
          burger.classList.remove("active");
          drawer.classList.remove("open");
        };
        a.addEventListener("click", close);
        cleanups.push(() => a.removeEventListener("click", close));
      });
    }

    const revealEls = document.querySelectorAll(".reveal, .reveal-stagger");
    const counters = document.querySelectorAll<HTMLElement>(".counter");

    const runCounter = (el: HTMLElement) => {
      const target = parseInt(el.dataset.target ?? "0", 10);
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      );
      revealEls.forEach((el) => revealObserver.observe(el));

      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCounter(entry.target as HTMLElement);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 },
      );
      counters.forEach((el) => counterObserver.observe(el));
      cleanups.push(() => {
        revealObserver.disconnect();
        counterObserver.disconnect();
      });
    } else {
      revealEls.forEach((el) => el.classList.add("in-view"));
      counters.forEach((el) => runCounter(el));
    }

    const backToTop = document.getElementById("back-to-top");
    const onScroll = () => {
      if (!backToTop) return;
      if (window.scrollY > 500) backToTop.classList.add("show");
      else backToTop.classList.remove("show");
    };
    window.addEventListener("scroll", onScroll);
    const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    backToTop?.addEventListener("click", toTop);
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      backToTop?.removeEventListener("click", toTop);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: tahMarkup }} />;
}
