import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import logoUrl from "../assets/Trust & Hope_Logo_Round_Transparent.webp";
import { useStats } from "@/lib/stats-store";
import { getBreadcrumbSchema, SITE_URL } from "@/lib/seo-schemas";

export const Route = createFileRoute("/how-reporting-works")({
  head: () => ({
    meta: [
      { title: "How Reporting Works | 5-Step Radiology Workflow | Trust and Hope Rad Pvt. Ltd." },
      {
        name: "description",
        content:
          "Discover how Trust and Hope Rad delivers 24x7 teleradiology reports in 5 simple steps. Fully integrated with your hospital PACS for fast CT, MRI & X-Ray reads.",
      },
      {
        name: "keywords",
        content:
          "teleradiology workflow, PACS integration, radiologist reporting process, emergency radiology turnaround, DICOM router",
      },
      { property: "og:title", content: "How Reporting Works | 5-Step Radiology Workflow | Trust and Hope Rad Pvt. Ltd." },
      {
        property: "og:description",
        content:
          "From scan to signed report in 5 steps. Direct DICOM router & cloud PACS integration for instant data transfer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/how-reporting-works` },
      { property: "og:image", content: `${SITE_URL}/Trust%20&%20Hope_Logo_Round_Transparent.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/how-reporting-works` },
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
            { name: "How Reporting Works", item: "/how-reporting-works" },
          ])
        ),
      },
    ],
  }),
  component: HowReportingWorks,
});

function HowReportingWorks() {
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
    <div className="how-reporting-works-page">
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
        <Link to="/" hash="services">Services</Link>
        <Link to="/how-reporting-works">How It Works</Link>
        <Link to="/" hash="why-us">Why Us</Link>
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
              "radial-gradient(1100px 500px at 85% -10%, rgba(43, 168, 183, 0.22), transparent 60%), linear-gradient(180deg, var(--deep-navy) 0%, #0A1C33 100%)",
            color: "#E6EDF5",
            padding: "80px 0 60px 0",
          }}
        >
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9">
                <span className="eyebrow mb-3" style={{ color: "var(--teal)" }}>
                  FROM SCAN TO SIGNED REPORT, IN FIVE STEPS
                </span>
                <h1
                  style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(34px, 4.5vw, 56px)",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  How Reporting Works
                </h1>
                <p
                  className="lead"
                  style={{
                    fontSize: "18.5px",
                    color: "#A2B6CF",
                    maxWidth: "800px",
                    margin: "0 auto 30px auto",
                    lineHeight: 1.6,
                  }}
                >
                  Each of these steps is designed to facilitate the process of getting reports done,
                  and is fully integrated with PACS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STEPPER VISUAL FLOW SECTION */}
        <section style={{ padding: "60px 0", background: "var(--paper)" }}>
          <div className="container">


            {/* DETAILED 5 STEPS PROCESS FLOW GRID (SINGLE LINE LAYOUT) */}
            <div className="steps-flow-container mb-5">
              <div className="steps-flow-row">
                {/* STEP 1 */}
                <div className="step-card-col">
                  <div className="step-flip-card" tabIndex={0}>
                    <div className="step-flip-inner">
                      <div className="step-flip-front">
                        <div>
                          <span className="step-num-badge">01</span>
                          <div className="flip-title">1. Study Received</div>
                        </div>
                        <div className="flip-hint">
                          <span>Hover</span>
                          <svg className="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                        </div>
                      </div>
                      <div className="step-flip-back step-detail-card">
                        <span className="step-num-badge">01</span>
                        <h3>1. Study Received</h3>
                        <p className="step-text">
                          Images make their way to us from your PACS or modality.
                        </p>
                        <div className="step-highlight">
                          Direct DICOM router &amp; cloud PACS integration for instant data transfer.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ARROW 1 -> 2 */}
                <div className="step-arrow-inline" title="Next Step">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>

                {/* STEP 2 */}
                <div className="step-card-col">
                  <div className="step-flip-card" tabIndex={0}>
                    <div className="step-flip-inner">
                      <div className="step-flip-front">
                        <div>
                          <span className="step-num-badge">02</span>
                          <div className="flip-title">2. Radiologist Assigned</div>
                        </div>
                        <div className="flip-hint">
                          <span>Hover</span>
                          <svg className="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                        </div>
                      </div>
                      <div className="step-flip-back step-detail-card">
                        <span className="step-num-badge">02</span>
                        <h3>2. Radiologist Assigned</h3>
                        <p className="step-text">
                          The right radiologist is chosen based on the specialty and urgency.
                        </p>
                        <div className="step-highlight">
                          Smart routing across {stats.radiologists}{stats.radiologistsSuffix} fellowship-trained radiologists 24/7.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ARROW 2 -> 3 */}
                <div className="step-arrow-inline" title="Next Step">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>

                {/* STEP 3 */}
                <div className="step-card-col">
                  <div className="step-flip-card" tabIndex={0}>
                    <div className="step-flip-inner">
                      <div className="step-flip-front">
                        <div>
                          <span className="step-num-badge">03</span>
                          <div className="flip-title">3. Report Drafted</div>
                        </div>
                        <div className="flip-hint">
                          <span>Hover</span>
                          <svg className="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                        </div>
                      </div>
                      <div className="step-flip-back step-detail-card">
                        <span className="step-num-badge">03</span>
                        <h3>3. Report Drafted</h3>
                        <p className="step-text">
                          Critical findings are flagged for priority in structured format.
                        </p>
                        <div className="step-highlight">
                          Standardized templates with immediate phone callbacks for stat findings.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ARROW 3 -> 4 */}
                <div className="step-arrow-inline" title="Next Step">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>

                {/* STEP 4 */}
                <div className="step-card-col">
                  <div className="step-flip-card" tabIndex={0}>
                    <div className="step-flip-inner">
                      <div className="step-flip-front">
                        <div>
                          <span className="step-num-badge">04</span>
                          <div className="flip-title">4. Quality Check</div>
                        </div>
                        <div className="flip-hint">
                          <span>Hover</span>
                          <svg className="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                        </div>
                      </div>
                      <div className="step-flip-back step-detail-card">
                        <span className="step-num-badge">04</span>
                        <h3>4. Quality Check</h3>
                        <p className="step-text">
                          A second review ensures accuracy with clinical considerations.
                        </p>
                        <div className="step-highlight">
                          Multi-tier Quality Assurance and peer review audits for 100% precision.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ARROW 4 -> 5 */}
                <div className="step-arrow-inline" title="Next Step">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>

                {/* STEP 5 */}
                <div className="step-card-col">
                  <div className="step-flip-card" tabIndex={0}>
                    <div className="step-flip-inner">
                      <div className="step-flip-front">
                        <div>
                          <span className="step-num-badge active-badge">05</span>
                          <div className="flip-title">5. Report Delivered</div>
                        </div>
                        <div className="flip-hint">
                          <span>Hover</span>
                          <svg className="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                        </div>
                      </div>
                      <div className="step-flip-back step-detail-card" style={{ borderColor: "rgba(43, 168, 183, 0.4)" }}>
                        <span className="step-num-badge active-badge">05</span>
                        <h3>5. Report Delivered</h3>
                        <p className="step-text">
                          The signed report is delivered with a direct query line to our system.
                        </p>
                        <div className="step-highlight">
                          Pushed back to PACS with doctor-to-doctor direct consultation line.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ARROW 5 -> PACS */}
                <div className="step-arrow-inline" title="Next Step">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>

                {/* PACS INTEGRATION FEATURE CARD */}
                <div className="step-card-col">
                  <div className="step-flip-card" tabIndex={0}>
                    <div className="step-flip-inner">
                      <div
                        className="step-flip-front"
                        style={{
                          background: "linear-gradient(135deg, #0E2440 0%, #16355C 100%)",
                          color: "#FFFFFF",
                        }}
                      >
                        <div>
                          <span
                            className="step-num-badge"
                            style={{ background: "rgba(255,255,255,0.15)", color: "#FFFFFF" }}
                          >
                            PACS
                          </span>
                          <div className="flip-title" style={{ color: "#FFFFFF" }}>Fully Integrated PACS</div>
                        </div>
                        <div
                          className="flip-hint"
                          style={{ background: "rgba(255,255,255,0.15)", color: "#E6EDF5" }}
                        >
                          <span>Hover</span>
                          <svg className="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                        </div>
                      </div>
                      <div
                        className="step-flip-back step-detail-card"
                        style={{
                          background: "linear-gradient(135deg, #0E2440 0%, #16355C 100%)",
                          color: "#FFFFFF",
                        }}
                      >
                        <span
                          className="step-num-badge"
                          style={{ background: "rgba(255,255,255,0.15)", color: "#FFFFFF" }}
                        >
                          PACS
                        </span>
                        <h3 style={{ color: "#FFFFFF" }}>Fully Integrated PACS</h3>
                        <p className="step-text" style={{ color: "#D0DCED" }}>
                          Hooks directly into DICOM feed to streamline report delivery.
                        </p>
                        <div
                          className="step-highlight"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            borderColor: "var(--teal)",
                            color: "#E6EDF5",
                          }}
                        >
                          Zero technical friction with IT support.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA CALLOUT BANNER */}
            <div
              style={{
                background: "linear-gradient(90deg, #0E2440 0%, #173B66 100%)",
                borderRadius: "20px",
                padding: "48px 40px",
                color: "#FFFFFF",
                textAlign: "center",
                boxShadow: "0 12px 30px rgba(14, 36, 64, 0.15)",
              }}
            >
              <h2 style={{ color: "#FFFFFF", fontSize: "30px", marginBottom: "16px" }}>
                Ready to Experience Seamless Radiology Reporting?
              </h2>
              <p
                style={{
                  color: "#B4C8E0",
                  fontSize: "17px",
                  maxWidth: "700px",
                  margin: "0 auto 28px auto",
                }}
              >
                Join hundreds of imaging centers and hospitals across India benefiting from our
                24x7 SLAs, direct radiologist access, and PACS integration.
              </p>
              <Link
                to="/"
                hash="contact"
                className="btn-custom btn-custom-primary"
                style={{ fontSize: "16px", padding: "14px 32px" }}
              >
                Get Started Today →
              </Link>
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
                  <Link to="/" hash="services">Services</Link>
                </li>
                <li>
                  <Link to="/how-reporting-works">How It Works</Link>
                </li>
                <li>
                  <Link to="/" hash="why-us">Why Us</Link>
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

