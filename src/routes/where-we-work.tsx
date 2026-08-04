import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import logoUrl from "../assets/Trust & Hope_Logo_Round_Transparent.webp";
import indianMapUrl from "../assets/Indian map.webp";
import { useStats } from "@/lib/stats-store";
import { getBreadcrumbSchema, SITE_URL } from "@/lib/seo-schemas";

export const Route = createFileRoute("/where-we-work")({
  head: () => ({
    meta: [
      { title: "Pan-India Teleradiology Coverage & Network | Trust and Hope Rad Pvt. Ltd." },
      {
        name: "description",
        content:
          "Serving 350+ hospitals and diagnostic centres across 15+ states in India. High-quality remote radiology reporting for metro trauma centers and regional clinics.",
      },
      {
        name: "keywords",
        content:
          "teleradiology network India, pan-India radiology reporting, remote diagnostic imaging India, diagnostic center radiology partner, hospital teleradiology",
      },
      { property: "og:title", content: "Pan-India Teleradiology Coverage & Network | Trust and Hope Rad Pvt. Ltd." },
      {
        property: "og:description",
        content:
          "One reporting network across 15+ states in India serving trauma centers, hospitals, and diagnostic clinics.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/where-we-work` },
      { property: "og:image", content: `${SITE_URL}/Trust%20&%20Hope_Logo_Round_Transparent.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/where-we-work` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
      },
      { rel: "stylesheet", href: "/tah.css" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getBreadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Where We Work", item: "/where-we-work" },
          ])
        ),
      },
    ],
  }),
  component: WhereWeWork,
});

function WhereWeWork() {
  const stats = useStats();

  useEffect(() => {
    const cleanups: Array<() => void> = [];

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

    const backToTop = document.getElementById("back-to-top");
    const onScroll = () => {
      if (!backToTop) return;
      if (window.scrollY > 400) backToTop.classList.add("show");
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

  return (
    <div className="where-we-work-page">
      {/* HEADER NAV */}
      <header className="nav">
        <div className="container">
          <div className="nav-wrap">
            <Link to="/" className="brand">
              <img src={logoUrl} alt="Trust and Hope Rad logo" />
              <span>
                TAH RAD<small>Trust and Hope Rad Pvt. Ltd.</small>
              </span>
            </Link>
            <nav className="links">
              <Link to="/">Home</Link>
              <Link to="/" hash="who-we-are">About Us</Link>
              <Link to="/" hash="services">Services</Link>
              <Link to="/" hash="contact">Contact</Link>
            </nav>
            <button className="burger" id="burger-btn" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-drawer" id="mobile-drawer">
        <Link to="/">Home</Link>
        <Link to="/" hash="who-we-are">About Us</Link>
        <Link to="/where-we-work">Where We Work</Link>
        <Link to="/our-team">Our Team</Link>
        <Link to="/how-reporting-works">How It Works</Link>
        <Link to="/" hash="services">Services</Link>
        <Link to="/" hash="contact">Contact</Link>
        <Link to="/" hash="contact" className="nav-cta">
          Partner With Us
        </Link>
      </div>

      <main>
        {/* HERO SECTION */}
        <section
          style={{
            background:
              "radial-gradient(1200px 600px at 85% -10%, rgba(43, 168, 183, 0.22), transparent 60%), linear-gradient(180deg, var(--deep-navy) 0%, #0A1C33 100%)",
            color: "#E6EDF5",
            padding: "90px 0 70px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-10">
                <div className="d-inline-flex align-items-center gap-2 mb-3">
                  <span className="eyebrow" style={{ color: "var(--teal)", margin: 0 }}>
                    PAN-INDIA COVERAGE &amp; NETWORK
                  </span>
                </div>

                <h1
                  style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(34px, 4.5vw, 56px)",
                    fontWeight: 700,
                    marginBottom: "20px",
                    lineHeight: 1.2,
                  }}
                >
                  One Reporting Network, <span style={{ color: "var(--teal)" }}>{stats.states}{stats.statesSuffix}</span> States
                </h1>

                <p
                  className="lead"
                  style={{
                    fontSize: "18.5px",
                    color: "#A2B6CF",
                    maxWidth: "860px",
                    margin: "0 auto 36px auto",
                    lineHeight: 1.65,
                    textAlign: "center",
                  }}
                >
                  From major city trauma centers to regional diagnostic clinics, our clients span the
                  entire country, and our team of radiologists and reporting keeps growing.
                </p>

                {/* HERO STATS BAR */}
                <div className="row g-3 justify-content-center">
                  <div className="col-6 col-md-3">
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(43, 168, 183, 0.25)",
                        borderRadius: "16px",
                        padding: "20px 16px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "30px", fontWeight: 700, color: "#FFFFFF" }}>
                        {stats.states}{stats.statesSuffix}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--teal)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginTop: "4px" }}>
                        States Covered
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3">
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(43, 168, 183, 0.25)",
                        borderRadius: "16px",
                        padding: "20px 16px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "30px", fontWeight: 700, color: "#FFFFFF" }}>
                        {stats.centres}{stats.centresSuffix}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--teal)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginTop: "4px" }}>
                        Centres Served
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3">
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(43, 168, 183, 0.25)",
                        borderRadius: "16px",
                        padding: "20px 16px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "30px", fontWeight: 700, color: "#FFFFFF" }}>
                        {stats.studies}{stats.studiesSuffix}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--teal)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginTop: "4px" }}>
                        Daily Scans
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3">
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(43, 168, 183, 0.25)",
                        borderRadius: "16px",
                        padding: "20px 16px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "30px", fontWeight: 700, color: "#FFFFFF" }}>
                        {stats.radiologists}{stats.radiologistsSuffix}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--teal)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginTop: "4px" }}>
                        Radiologists
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE STATEMENT BANNER */}
        <section style={{ padding: "50px 0 0 0", background: "var(--paper)" }}>
          <div className="container">
            <div
              style={{
                background: "linear-gradient(135deg, #0E2440 0%, #163863 100%)",
                border: "1px solid rgba(43, 168, 183, 0.3)",
                borderRadius: "20px",
                padding: "36px 40px",
                color: "#FFFFFF",
                boxShadow: "0 14px 40px rgba(14, 36, 64, 0.15)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  color: "#E6EDF5",
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: "920px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                With every new state we expand to, expect no less: <strong style={{ color: "var(--teal)" }}>direct communication</strong>,{" "}
                <strong style={{ color: "#FFFFFF" }}>disciplined SLAs</strong>, and <strong style={{ color: "var(--teal)" }}>consistent quality of radiologists</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* MAP & NETWORK PILLARS SECTION */}
        <section style={{ padding: "70px 0 90px 0", background: "var(--paper)" }}>
          <div className="container">
            <div className="row align-items-center g-5">
              {/* LEFT 3D MAP DISPLAY */}
              <div className="col-12 col-lg-6">
                <div
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(43, 168, 183, 0.15), transparent 70%), linear-gradient(135deg, #0A1C33 0%, #0E2440 100%)",
                    border: "1px solid rgba(43, 168, 183, 0.35)",
                    borderRadius: "24px",
                    padding: "36px",
                    boxShadow: "0 20px 60px rgba(14, 36, 64, 0.25)",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <img
                    src={indianMapUrl}
                    alt="Pan-India Teleradiology Reporting Map"
                    style={{
                      maxHeight: "480px",
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: "16px",
                      filter: "drop-shadow(0 0 35px rgba(43, 168, 183, 0.45))",
                    }}
                  />
                </div>
              </div>

              {/* RIGHT NETWORK PILLARS */}
              <div className="col-12 col-lg-6">
                <span className="eyebrow mb-2" style={{ color: "var(--teal)" }}>
                  OUR COVERAGE GUARANTEE
                </span>
                <h2 style={{ fontSize: "34px", color: "var(--deep-navy)", fontWeight: 700, marginBottom: "24px" }}>
                  Why Hospitals Across India Trust Our Network
                </h2>

                <div className="d-flex flex-column gap-4">
                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid var(--line)",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      boxShadow: "0 4px 16px rgba(14, 36, 64, 0.04)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: "rgba(43, 168, 183, 0.12)",
                          color: "var(--teal)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                        }}
                      >
                        01
                      </div>
                      <h4 style={{ margin: 0, fontSize: "18px", color: "var(--deep-navy)", fontWeight: 700 }}>
                        Direct Radiologist Access
                      </h4>
                    </div>
                    <p style={{ margin: 0, fontSize: "14.5px", color: "var(--navy-blue)", lineHeight: 1.6, textAlign: "left" }}>
                      Direct communication with reporting radiologists without ticket queues or call center delays.
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid var(--line)",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      boxShadow: "0 4px 16px rgba(14, 36, 64, 0.04)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: "rgba(43, 168, 183, 0.12)",
                          color: "var(--teal)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                        }}
                      >
                        02
                      </div>
                      <h4 style={{ margin: 0, fontSize: "18px", color: "var(--deep-navy)", fontWeight: 700 }}>
                        Disciplined STAT SLAs
                      </h4>
                    </div>
                    <p style={{ margin: 0, fontSize: "14.5px", color: "var(--navy-blue)", lineHeight: 1.6, textAlign: "left" }}>
                      15–30 min emergency turnaround for trauma &amp; stroke CT/MRI, with sub-2 hour routine reporting 24/7/365.
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid var(--line)",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      boxShadow: "0 4px 16px rgba(14, 36, 64, 0.04)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: "rgba(43, 168, 183, 0.12)",
                          color: "var(--teal)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                        }}
                      >
                        03
                      </div>
                      <h4 style={{ margin: 0, fontSize: "18px", color: "var(--deep-navy)", fontWeight: 700 }}>
                        Consistent Radiologist Quality
                      </h4>
                    </div>
                    <p style={{ margin: 0, fontSize: "14.5px", color: "var(--navy-blue)", lineHeight: 1.6, textAlign: "left" }}>
                      140+ fellowship-trained MD/DNB radiologists matching specialized subspecialties across Neuro, MSK, Body, and Cardiac imaging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION CARD */}
            <div
              className="mt-5 text-center"
              style={{
                background: "linear-gradient(135deg, #0A1C33 0%, #0E2440 100%)",
                border: "1px solid rgba(43, 168, 183, 0.35)",
                borderRadius: "24px",
                padding: "48px 32px",
                color: "#FFFFFF",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h3 style={{ fontSize: "28px", color: "#FFFFFF", fontWeight: 700, marginBottom: "12px" }}>
                Expand Your Diagnostic Capacity Today
              </h3>
              <p style={{ color: "#A2B6CF", fontSize: "16px", maxWidth: "680px", margin: "0 auto 28px auto" }}>
                Connect your PACS gateway in minutes and experience zero-delay 24/7 radiology reporting tailored for your facility.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/" hash="contact" className="btn-custom btn-custom-primary" style={{ padding: "14px 32px", fontSize: "15px" }}>
                  Partner With Us →
                </Link>
                <Link to="/how-reporting-works" className="btn-custom btn-custom-ghost" style={{ borderColor: "rgba(43, 168, 183, 0.4)", color: "#FFFFFF", background: "rgba(255, 255, 255, 0.08)", padding: "14px 28px", fontSize: "15px" }}>
                  See How It Works →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-12 col-lg-5 pe-lg-4">
              <Link to="/" className="brand">
                <img src={logoUrl} alt="Trust and Hope Rad logo" />
                <span>TAH RAD</span>
              </Link>
              <p data-stat-summary>
                Trust and Hope Rad Pvt. Ltd. | 24×7 teleradiology services serving {stats.centres}{stats.centresSuffix} centres, {stats.studies}{stats.studiesSuffix} new
                studies uploaded daily to PACS, {stats.radiologists}{stats.radiologistsSuffix} radiologists across specialisations, {stats.states}{stats.statesSuffix} states covered in India.
              </p>
            </div>
            <div className="col-6 col-lg-3 offset-lg-1">
              <h5>Navigate</h5>
              <ul>
                <li>
                  <Link to="/" hash="who-we-are">About Us</Link>
                </li>
                <li>
                  <Link to="/where-we-work">Where We Work</Link>
                </li>
                <li>
                  <Link to="/our-team">Our Team</Link>
                </li>
                <li>
                  <Link to="/how-reporting-works">How It Works</Link>
                </li>
                <li>
                  <Link to="/" hash="services">Services</Link>
                </li>
                <li>
                  <Link to="/" hash="contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <h5>Modalities</h5>
              <ul>
                <li>
                  <Link to="/" hash="services">CT Reporting</Link>
                </li>
                <li>
                  <Link to="/" hash="services">MRI Reporting</Link>
                </li>
                <li>
                  <Link to="/" hash="services">X-Ray &amp; USG Reads</Link>
                </li>
                <li>
                  <Link to="/" hash="services">PET Oncology Scans</Link>
                </li>
                <li>
                  <Link to="/" hash="services">Nighthawk &amp; Stat Reads</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} Trust and Hope Rad Pvt. Ltd. All rights reserved.</span>
            <span>Read Right. Read Fast. 24/7.</span>
          </div>
        </div>
      </footer>

      <button id="back-to-top" aria-label="Back to Top">
        ↑
      </button>
    </div>
  );
}
