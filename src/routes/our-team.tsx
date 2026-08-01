import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import logoUrl from "../assets/Trust & Hope_Logo_Round_Transparent.webp";
import teamImgUrl from "../assets/team.webp";
import { useStats } from "@/lib/stats-store";
import { getBreadcrumbSchema, SITE_URL } from "@/lib/seo-schemas";

export const Route = createFileRoute("/our-team")({
  head: () => ({
    meta: [
      { title: "Our Radiologist Panel & Leadership Team | Trust and Hope Rad Pvt. Ltd." },
      {
        name: "description",
        content:
          "Meet the clinical leadership and 140+ fellowship-trained radiologists at Trust and Hope Rad Pvt. Ltd. Subspecialty expertise across CT, MRI, Neuro, MSK & Cardiac radiology.",
      },
      {
        name: "keywords",
        content:
          "radiologists India, teleradiologists, subspecialty radiologists, neuroradiology reporting, MSK radiologist, TAH RAD team, clinical operations radiology",
      },
      { property: "og:title", content: "Our Radiologist Panel & Leadership Team | Trust and Hope Rad Pvt. Ltd." },
      {
        property: "og:description",
        content:
          "140+ fellowship-trained radiologists delivering high-accuracy reporting 24/7/365 across hospitals in India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/our-team` },
      { property: "og:image", content: `${SITE_URL}/Trust%20&%20Hope_Logo_Round_Transparent.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/our-team` },
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
            { name: "Our Team", item: "/our-team" },
          ])
        ),
      },
    ],
  }),
  component: OurTeam,
});

function OurTeam() {
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
    <div className="our-team-page">
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
              <Link to="/#who-we-are">About Us</Link>
              <Link to="/#services">Services</Link>
              <Link to="/#contact">Contact</Link>
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
        <Link to="/#who-we-are">About Us</Link>
        <Link to="/our-team">Our Team</Link>
        <Link to="/where-we-work">Where We Work</Link>
        <Link to="/how-reporting-works">How It Works</Link>
        <Link to="/#services">Services</Link>
        <Link to="/#contact">Contact</Link>
        <Link to="/#contact" className="nav-cta">
          Partner With Us
        </Link>
      </div>

      <main>
        {/* HERO SECTION — LIGHT EDITORIAL SIDE-BY-SIDE */}
        <section
          style={{
            background: "#F6F8FA",
            padding: "90px 0 80px 0",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div className="container">
            <div className="row g-4 g-lg-5 align-items-center">
              {/* LEFT CONTENT COLUMN */}
              <div className="col-12 col-lg-6">
                <span className="eyebrow mb-3" style={{ color: "var(--teal)" }}>
                  OUR TEAM
                </span>
                <h1
                  style={{
                    color: "var(--deep-navy)",
                    fontSize: "clamp(32px, 3.8vw, 50px)",
                    fontWeight: 700,
                    lineHeight: 1.18,
                    letterSpacing: "-0.02em",
                    marginBottom: "20px",
                  }}
                >
                  {stats.radiologists}{stats.radiologistsSuffix} radiologists.<br />One quality bar.
                </h1>
                <p
                  style={{
                    fontSize: "16.5px",
                    color: "#4A627D",
                    lineHeight: 1.68,
                    marginBottom: "32px",
                    maxWidth: "580px",
                  }}
                >
                  We have a leadership team with wide experience across radiology and healthcare
                  operations and client servicing, backed by a large team of over {stats.radiologists}{stats.radiologistsSuffix} radiologists who
                  report across both general and subspecialties.
                </p>

                {/* 2x2 STAT CARDS GRID */}
                <div className="row g-3">
                  <div className="col-6">
                    <div className="team-stat-card">
                      <h3>{stats.radiologists}{stats.radiologistsSuffix}</h3>
                      <span>RADIOLOGISTS</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="team-stat-card">
                      <h3>{stats.studies}{stats.studiesSuffix}</h3>
                      <span>STUDIES DAILY</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="team-stat-card">
                      <h3>Multi-level</h3>
                      <span>QUALITY CONTROL</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="team-stat-card">
                      <h3>24×7</h3>
                      <span>OPERATIONS DESK</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE COLUMN */}
              <div className="col-12 col-lg-6">
                <div className="team-photo-showcase">
                  <img
                    src={teamImgUrl}
                    alt="Trust and Hope Radiologists and Healthcare Team"
                    className="team-photo-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP TEAM CARDS SECTION */}
        <section style={{ padding: "80px 0 90px 0", background: "#FFFFFF" }}>
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-12 col-lg-8">
                <span className="eyebrow mb-2">LEADERSHIP &amp; MANAGEMENT</span>
                <h2 style={{ fontSize: "32px", color: "var(--deep-navy)", fontWeight: 700 }}>
                  Executive Leadership
                </h2>
              </div>
            </div>

            <div className="row g-4 mb-5">
              {/* 1. Founder and Managing Director */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="team-leader-card">
                  <div className="team-avatar-ph">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3>Founder and Managing Director</h3>
                  <span className="team-role-tag">Company leadership</span>
                </div>
              </div>

              {/* 2. Chief of Radiology and Clinical Quality */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="team-leader-card">
                  <div className="team-avatar-ph">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h3>Chief of Radiology and Clinical Quality</h3>
                  <span className="team-role-tag">Reporting standards and QA</span>
                </div>
              </div>

              {/* 3. Head of Client Success */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="team-leader-card">
                  <div className="team-avatar-ph">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3>Head of Client Success</h3>
                  <span className="team-role-tag">Onboarding and communication</span>
                </div>
              </div>
            </div>

            {/* NOTE BOX */}
            <div
              style={{
                background: "#F0F7FA",
                border: "1px dashed var(--teal)",
                borderRadius: "14px",
                padding: "20px 28px",
                color: "var(--navy-blue)",
                fontSize: "15px",
                textAlign: "center",
                maxWidth: "900px",
                margin: "0 auto",
                lineHeight: 1.5,
              }}
            >
              <em>(Note: the team names and photos will be added. This has been structured so that real profiles can be added here with no redesign needed.)</em>
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
                  <Link to="/#who-we-are">About Us</Link>
                </li>
                <li>
                  <Link to="/our-team">Our Team</Link>
                </li>
                <li>
                  <Link to="/where-we-work">Where We Work</Link>
                </li>
                <li>
                  <Link to="/how-reporting-works">How It Works</Link>
                </li>
                <li>
                  <Link to="/#services">Services</Link>
                </li>
                <li>
                  <Link to="/#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <h5>Modalities</h5>
              <ul>
                <li>
                  <Link to="/#services">CT Reporting</Link>
                </li>
                <li>
                  <Link to="/#services">MRI Reporting</Link>
                </li>
                <li>
                  <Link to="/#services">X-Ray &amp; USG Reads</Link>
                </li>
                <li>
                  <Link to="/#services">PET Oncology Scans</Link>
                </li>
                <li>
                  <Link to="/#services">Nighthawk &amp; Stat Reads</Link>
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
