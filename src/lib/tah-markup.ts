import logoUrl from "../assets/Trust & Hope_Logo_Round_Transparent.webp";
import indianMapUrl from "../assets/Indian map.webp";
import heroVideo1Url from "../assets/watermarked_preview (1).webm";
import heroVideo2Url from "../assets/WhatsApp_Video_2026-07-31_at_5.47.27_PM.webm";
import whoWeAreImgUrl from "../assets/image.webp";

export const tahMarkup = `

<header class="nav">
  <div class="container">
    <div class="nav-wrap">
      <a href="#hero" class="brand">
        <img src="${logoUrl}" alt="Trust and Hope Rad logo">
        <span>TAH RAD<small>Trust and Hope Rad Pvt. Ltd.</small></span>
      </a>
      <nav class="links">
        <a href="#hero">Home</a>
        <a href="#who-we-are">About Us</a>
        <a href="#how-reporting-works">How It Works</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <button class="burger" id="burger-btn" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</header>

<div class="mobile-drawer" id="mobile-drawer">
  <a href="#hero">Home</a>
  <a href="#who-we-are">About Us</a>
  <a href="/our-team">Our Team</a>
  <a href="/where-we-work">Where We Work</a>
  <a href="#how-reporting-works">How It Works</a>
  <a href="#services">Services</a>
  <a href="#why-us">Why Us</a>
  <a href="#contact">Contact</a>
  <a href="#contact" class="nav-cta btn-glow">Partner With Us</a>
</div>

<main>
  <!-- HERO SECTION -->
  <section class="hero" id="hero">
    <video id="hero-bg-video" src="${heroVideo1Url}" data-next-src="${heroVideo2Url}" autoplay muted playsinline class="hero-bg-video"></video>
    <div class="hero-video-overlay"></div>

    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-12 col-lg-9 col-xl-8 reveal">
          <span class="eyebrow">24×7 Teleradiology Reporting</span>
          <h1>FULL-SPECTRUM TELERADIOLOGY,<br><em>ONE REPORTING PARTNER</em></h1>
          <p class="lead">From X-Rays to specialty MRIs, we cover the entire diagnostic imaging spectrum so you don't have to work with multiple vendors for different modalities.</p>
          
          <div class="hero-quick-nav mt-3 pt-2 d-flex flex-wrap gap-2">
            <a href="#services" class="btn-custom btn-custom-ghost" style="padding: 9px 18px; font-size: 13.5px; border-color: rgba(43,168,183,0.35) !important; color: #FFFFFF !important; background: rgba(255,255,255,0.08) !important;">Services →</a>
            <a href="#contact" class="btn-custom btn-custom-ghost" style="padding: 9px 18px; font-size: 13.5px; border-color: rgba(43,168,183,0.35) !important; color: #FFFFFF !important; background: rgba(255,255,255,0.08) !important;">Contact Us →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS COUNTER BAR -->
  <section class="impact" id="stats">
    <div class="container">
      <div class="row g-3 text-center reveal-stagger">
        <div class="col-6 col-md-3 item">
          <div class="num"><span class="counter" data-stat-counter="centres" data-target="350">0</span><span class="suffix" data-stat-suffix="centres">+</span></div>
          <span class="impact-label">Centres Served</span>
        </div>
        <div class="col-6 col-md-3 item">
          <div class="num"><span class="counter" data-stat-counter="studies" data-target="1000">0</span><span class="suffix" data-stat-suffix="studies">+</span></div>
          <span class="impact-label">New Studies Uploaded Daily to PACS</span>
        </div>
        <div class="col-6 col-md-3 item">
          <div class="num"><span class="counter" data-stat-counter="radiologists" data-target="140">0</span><span class="suffix" data-stat-suffix="radiologists">+</span></div>
          <span class="impact-label">Radiologists Across Specialisations</span>
        </div>
        <div class="col-6 col-md-3 item">
          <div class="num"><span class="counter" data-stat-counter="states" data-target="15">0</span><span class="suffix" data-stat-suffix="states">+</span></div>
          <span class="impact-label">States Covered in India</span>
        </div>
      </div>
    </div>
  </section>

  <!-- WHO WE ARE SECTION -->
  <section class="who-we-are" id="who-we-are">
    <div class="container">
      <div class="row g-4 g-lg-5 align-items-center">
        <div class="col-12 col-lg-5 reveal">
          <div class="who-we-are-image-card">
            <img src="${whoWeAreImgUrl}" alt="Trust & Hope Radiologists Consulting CT & MRI Diagnostic Scans" class="who-we-are-img">
            <div class="who-we-are-img-overlay">
              <span class="badge-tag">🔬 Expert Consultation</span>
              <p class="overlay-caption">Board-certified radiologists reviewing live diagnostic studies</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-7 reveal">
          <span class="eyebrow">WHO WE ARE</span>
          <h2 class="who-title">Direct Radiologist Communication, Zero Disconnect</h2>
          
          <p class="who-text mb-3">Every scan request means there’s a patient on the line. Patients experiencing everything from strokes to CT traumas to anxious patients waiting for follow-up MRIs and more. Our workflow deliberately adopts this level of pressure.</p>
          
          <div class="quote-box my-3">
            <p>“We don’t just read scans, we remain accessible before, during and after the report is signed.”</p>
          </div>

          <p class="who-text mb-0">The main differentiator for us, is our extensive network of Radiologists as well as our communication with our clients. Our clients don’t have to rely on ticket systems with no information related to the request, or approximate time frames. Our clients can expect direct communication with the radiologist, clear paths for escalation, and reporting SLAs we are actually accountable to.</p>
          
          <div class="d-flex flex-wrap gap-2 mt-4">
            <a href="/our-team" class="btn-custom btn-custom-primary">Meet Our Radiologists Panel →</a>
            <a href="#why-us" class="btn-custom btn-custom-ghost">Why Choose TAH RAD →</a>
            <a href="/how-reporting-works" class="btn-custom btn-custom-ghost">How It Works →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MISSION & VISION SECTION -->
  <section class="mission-vision" id="mission-vision">
    <div class="container">
      <div class="row justify-content-center text-center mb-4 reveal">
        <div class="col-12 col-lg-8">
          <span class="eyebrow">MISSION &amp; VISION</span>
          <h2>Improving the speed and quality of clinical decisions</h2>
          <p style="color:var(--muted-slate); font-size:16px;">We empower hospitals, diagnostic centres, and clinical teams across India with remote diagnostic interpretations that you can trust implicitly.</p>
        </div>
      </div>

      <div class="row g-4 reveal-stagger">
        <div class="col-12 col-md-6">
          <div class="mv-card mission">
            <div class="icon-badge">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <span class="eyebrow mb-2">OUR MISSION</span>
            <h3>Timely, precise, high-quality care</h3>
            <p>Enhance healthcare delivery through timely, precise, and high-quality tele-radiology services.</p>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="mv-card vision">
            <div class="icon-badge">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <span class="eyebrow mb-2" style="color:var(--teal);">OUR VISION</span>
            <h3>A global leader in tele-radiology</h3>
            <p>Become a global leader in tele-radiology by fostering innovation, trust, and diagnostic excellence.</p>
          </div>
        </div>
      </div>

      <div class="philosophy-bar reveal">
        <h5>SERVICE PHILOSOPHY</h5>
        <div class="philosophy-pills">
          <span class="philosophy-pill">Accuracy</span>
          <span class="philosophy-pill">Speed</span>
          <span class="philosophy-pill">Reliability</span>
          <span class="philosophy-pill">Workflow Optimization</span>
          <span class="philosophy-pill">Patient Care</span>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW REPORTING WORKS SECTION -->
  <section class="how-reporting-works" id="how-reporting-works" style="padding: 85px 0; background: var(--paper); border-bottom: 1px solid var(--line);">
    <div class="container">
      <div class="row justify-content-center text-center mb-5 reveal">
        <div class="col-12 col-lg-9">
          <span class="eyebrow mb-2">FROM SCAN TO SIGNED REPORT, IN FIVE STEPS</span>
          <h2 style="font-size: clamp(30px, 4vw, 48px); margin-top: 10px;">How Reporting Works</h2>
          <p style="color: var(--muted-slate); font-size: 17.5px; max-width: 800px; margin: 0 auto;">Each of these steps is designed to facilitate the process of getting reports done, and is fully integrated with PACS.</p>
        </div>
      </div>

      <!-- DETAILED 5 STEPS PROCESS FLOW GRID -->
      <div class="steps-flow-container reveal-stagger">
        <!-- ROW 1: STEPS 1, 2, 3 -->
        <div class="steps-flow-row">
          <!-- STEP 1 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div>
                    <span class="step-num-badge">01</span>
                    <div class="flip-title">1. Study Received</div>
                  </div>
                  <div class="flip-hint">
                    <span>Hover to reveal details</span>
                    <svg class="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  </div>
                </div>
                <div class="step-flip-back step-detail-card">
                  <span class="step-num-badge">01</span>
                  <h3>1. Study Received</h3>
                  <p class="step-text">Images make their way to us from your PACS or modality.</p>
                  <div class="step-highlight">Direct DICOM router &amp; cloud PACS integration for instant data transfer.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARROW 1 -> 2 -->
          <div class="step-arrow-inline" title="Next Step">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <!-- STEP 2 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div>
                    <span class="step-num-badge">02</span>
                    <div class="flip-title">2. Radiologist Assigned</div>
                  </div>
                  <div class="flip-hint">
                    <span>Hover to reveal details</span>
                    <svg class="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  </div>
                </div>
                <div class="step-flip-back step-detail-card">
                  <span class="step-num-badge">02</span>
                  <h3>2. Radiologist Assigned</h3>
                  <p class="step-text">The right radiologist is chosen based on the specialty and the modality, as well as the urgency of the case.</p>
                  <div class="step-highlight">Smart routing across <span data-stat-val="radiologists">140+</span> fellowship-trained radiologists 24/7/365.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARROW 2 -> 3 -->
          <div class="step-arrow-inline" title="Next Step">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <!-- STEP 3 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div>
                    <span class="step-num-badge">03</span>
                    <div class="flip-title">3. Report Drafted</div>
                  </div>
                  <div class="flip-hint">
                    <span>Hover to reveal details</span>
                    <svg class="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  </div>
                </div>
                <div class="step-flip-back step-detail-card">
                  <span class="step-num-badge">03</span>
                  <h3>3. Report Drafted</h3>
                  <p class="step-text">Critical findings are flagged for priority, and the report is done in a structured format.</p>
                  <div class="step-highlight">Standardized reporting templates with immediate phone callbacks for stat findings.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ROW CONNECTOR: STEP 3 -> STEP 4 LONG SWEEPING ARROW -->
        <div class="steps-row-connector-long">
          <div class="long-arrow-wrapper">
            <svg viewBox="0 0 1000 56" preserveAspectRatio="none">
              <defs>
                <marker id="arrowhead-teal-long" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
                  <path d="M 0 0 L 8 4 L 0 8 z" fill="var(--teal)" />
                </marker>
              </defs>
              <path class="long-arrow-path" d="M 850 6 C 850 48, 150 8, 150 48" marker-end="url(#arrowhead-teal-long)"></path>
            </svg>
            <div class="long-arrow-label" title="Flow to Step 4 (Quality Check)">
              <span>Step 3 &rarr; Step 4</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </div>
          </div>
        </div>

        <!-- ROW 2: STEPS 4, 5, PACS -->
        <div class="steps-flow-row">
          <!-- STEP 4 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div>
                    <span class="step-num-badge">04</span>
                    <div class="flip-title">4. Quality Check</div>
                  </div>
                  <div class="flip-hint">
                    <span>Hover to reveal details</span>
                    <svg class="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  </div>
                </div>
                <div class="step-flip-back step-detail-card">
                  <span class="step-num-badge">04</span>
                  <h3>4. Quality Check</h3>
                  <p class="step-text">A second review is done to ensure accuracy and completeness of the report, with clinical considerations of the findings.</p>
                  <div class="step-highlight">Multi-tier Quality Assurance and peer review audits for 100% precision.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARROW 4 -> 5 -->
          <div class="step-arrow-inline" title="Next Step">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <!-- STEP 5 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div>
                    <span class="step-num-badge active-badge">05</span>
                    <div class="flip-title">5. Report Delivered</div>
                  </div>
                  <div class="flip-hint">
                    <span>Hover to reveal details</span>
                    <svg class="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  </div>
                </div>
                <div class="step-flip-back step-detail-card" style="border-color: rgba(43, 168, 183, 0.4);">
                  <span class="step-num-badge active-badge">05</span>
                  <h3>5. Report Delivered</h3>
                  <p class="step-text">The signed report is delivered with a direct query line to our system.</p>
                  <div class="step-highlight">Pushed back to your PACS with doctor-to-doctor direct consultation line.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARROW 5 -> PACS -->
          <div class="step-arrow-inline" title="Next Step">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <!-- PACS FEATURE CARD -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front" style="background: linear-gradient(135deg, #0E2440 0%, #16355C 100%); color: #FFFFFF;">
                  <div>
                    <span class="step-num-badge" style="background: rgba(255,255,255,0.15); color: #FFFFFF;">PACS</span>
                    <div class="flip-title" style="color: #FFFFFF;">Fully Integrated PACS</div>
                  </div>
                  <div class="flip-hint" style="background: rgba(255,255,255,0.15); color: #E6EDF5;">
                    <span>Hover to reveal details</span>
                    <svg class="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  </div>
                </div>
                <div class="step-flip-back step-detail-card" style="background: linear-gradient(135deg, #0E2440 0%, #16355C 100%); color: #FFFFFF;">
                  <span class="step-num-badge" style="background: rgba(255,255,255,0.15); color: #FFFFFF;">PACS</span>
                  <h3 style="color: #FFFFFF;">Fully Integrated PACS</h3>
                  <p class="step-text" style="color: #D0DCED;">No manual uploading required. Our system hooks directly into your existing DICOM feed to streamline scan reception and report delivery.</p>
                  <div class="step-highlight" style="background: rgba(255,255,255,0.08); border-color: var(--teal); color: #E6EDF5;">Zero technical friction. Complete setup support provided by our IT team.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT WE REPORT / SERVICES SECTION -->
  <section class="services" id="services">
    <div class="container">
      <div class="row mb-5 reveal text-center justify-content-center">
        <div class="col-12 col-lg-9">
          <span class="eyebrow">WHAT WE DO</span>
          <h2 style="font-size:clamp(30px, 4vw, 48px); margin-top:10px;">FULL-SPECTRUM TELERADIOLOGY,<br><em style="font-style:normal; color:var(--teal);">ONE REPORTING PARTNER</em></h2>
          <p style="color:var(--navy-blue); font-size:16px; margin-top:14px; max-width:620px; margin-left:auto; margin-right:auto;">From X-Rays to specialty MRIs, we cover the entire diagnostic imaging spectrum so you don't have to work with multiple vendors for different modalities.</p>
        </div>
      </div>

      <!-- SPLIT-PANEL SERVICES EXPLORER -->
      <div class="svc-explorer reveal" id="svc-explorer">

        <!-- LEFT: Service Nav Sidebar -->
        <div class="svc-nav" id="svc-nav">
          <div class="svc-nav-header">
            <span class="svc-nav-badge">24/7 Active</span>
            <p class="svc-nav-label">8 Services</p>
          </div>
          <div class="svc-nav-list">
            <button class="svc-pill active" data-svc="ct">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg></span>
              <span class="svc-pill-name">CT Reporting</span>
            </button>
            <button class="svc-pill" data-svc="mri">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/></svg></span>
              <span class="svc-pill-name">MRI Reporting</span>
            </button>
            <button class="svc-pill" data-svc="xray">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 8V1"/><path d="M12 16v7"/><path d="m15.5 10 6-3.5"/><path d="m8.5 14-6 3.5"/><path d="m15.5 14 6 3.5"/><path d="m8.5 10-6-3.5"/></svg></span>
              <span class="svc-pill-name">X-Ray Reporting</span>
            </button>
            <button class="svc-pill" data-svc="pet">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><ellipse cx="12" cy="12" rx="9" ry="3"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(120 12 12)"/></svg></span>
              <span class="svc-pill-name">PET Reporting</span>
            </button>
            <button class="svc-pill" data-svc="usg">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></span>
              <span class="svc-pill-name">USG Reporting</span>
            </button>
            <button class="svc-pill" data-svc="subspecialty">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg></span>
              <span class="svc-pill-name">Subspecialty Reads</span>
            </button>
            <button class="svc-pill" data-svc="nighthawk">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg></span>
              <span class="svc-pill-name">Nighthawk &amp; Stat</span>
            </button>
            <button class="svc-pill" data-svc="second">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg></span>
              <span class="svc-pill-name">Second Opinions</span>
            </button>

          </div>
        </div>

        <!-- RIGHT: Detail Panel -->
        <div class="svc-detail-panel" id="svc-detail-panel">

          <!-- CT -->
          <div class="svc-panel active" id="svc-ct">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg></div>
              <div>
                <span class="svc-panel-cat">Emergency &amp; Cross-Sectional</span>
                <h3 class="svc-panel-title">CT Reporting</h3>
                <p class="svc-panel-sub">Fast &amp; Accurate Computed Tomography</p>
              </div>
              <span class="svc-panel-badge stat">Sub-Hour SLA</span>
            </div>
            <p class="svc-panel-desc">High-speed CT reporting for head, chest, abdomen, angiography, and polytrauma emergencies with sub-hour stat delivery.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Trauma &amp; Stroke Emergency Reads</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>3D Angiography &amp; Vessel Analysis</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Routine Abdominal &amp; Chest Scans</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Head CT</span><span class="svc-footer-chip">Chest CT</span><span class="svc-footer-chip">CTA</span><span class="svc-footer-chip">Polytrauma</span><span class="svc-footer-chip">Abdominal CT</span>
            </div>
          </div>

          <!-- MRI -->
          <div class="svc-panel" id="svc-mri">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/></svg></div>
              <div>
                <span class="svc-panel-cat">Subspecialty</span>
                <h3 class="svc-panel-title">MRI Reporting</h3>
                <p class="svc-panel-sub">High-Resolution Soft Tissue Diagnostic</p>
              </div>
              <span class="svc-panel-badge">Subspecialty</span>
            </div>
            <p class="svc-panel-desc">Comprehensive MRI interpretations covering neuroradiology, spine, musculoskeletal joints, pelvic, and cardiac studies.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Subspecialty Neuroradiology &amp; Spine</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>MSK Joint &amp; Cartilage Imaging</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Multiparametric Prostate &amp; Abdomen</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Neuro MRI</span><span class="svc-footer-chip">Spine MRI</span><span class="svc-footer-chip">MSK</span><span class="svc-footer-chip">Cardiac MRI</span><span class="svc-footer-chip">mpMRI</span>
            </div>
          </div>

          <!-- X-Ray -->
          <div class="svc-panel" id="svc-xray">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 8V1"/><path d="M12 16v7"/><path d="m15.5 10 6-3.5"/><path d="m8.5 14-6 3.5"/><path d="m15.5 14 6 3.5"/><path d="m8.5 10-6-3.5"/></svg></div>
              <div>
                <span class="svc-panel-cat">Routine &amp; High-Volume</span>
                <h3 class="svc-panel-title">X-Ray Reporting</h3>
                <p class="svc-panel-sub">24/7 Digital Radiography</p>
              </div>
              <span class="svc-panel-badge">24/7 Digital</span>
            </div>
            <p class="svc-panel-desc">Rapid turnaround for high-volume plain radiography, chest X-rays, trauma skeletal series, and routine screening.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Chest &amp; Cardiac Radiography</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Orthopedic Skeletal Series</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>High-Volume Batch Reporting</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Chest X-Ray</span><span class="svc-footer-chip">Skeletal</span><span class="svc-footer-chip">Trauma</span><span class="svc-footer-chip">Screening</span><span class="svc-footer-chip">Batch</span>
            </div>
          </div>

          <!-- PET -->
          <div class="svc-panel" id="svc-pet">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><ellipse cx="12" cy="12" rx="9" ry="3"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(120 12 12)"/></svg></div>
              <div>
                <span class="svc-panel-cat">Subspecialty &amp; Advanced</span>
                <h3 class="svc-panel-title">PET Reporting</h3>
                <p class="svc-panel-sub">Oncology &amp; Metabolic Imaging</p>
              </div>
              <span class="svc-panel-badge">Oncology Staging</span>
            </div>
            <p class="svc-panel-desc">Specialized PET/CT molecular imaging reads for cancer staging, therapy evaluation, and metabolic lesion tracking.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Oncology Staging &amp; Restaging</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>FDG Whole-Body Scans</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Radiotracer Uptake Quantification</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">PET/CT</span><span class="svc-footer-chip">FDG</span><span class="svc-footer-chip">Oncology</span><span class="svc-footer-chip">PERCIST</span><span class="svc-footer-chip">SUVmax</span>
            </div>
          </div>

          <!-- USG -->
          <div class="svc-panel" id="svc-usg">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
              <div>
                <span class="svc-panel-cat">Routine</span>
                <h3 class="svc-panel-title">USG Reporting</h3>
                <p class="svc-panel-sub">Ultrasonography &amp; Color Doppler</p>
              </div>
              <span class="svc-panel-badge">Doppler Vascular</span>
            </div>
            <p class="svc-panel-desc">Expert review for general ultrasound, Doppler vascular studies, anomaly scans, and pelvic diagnostic imagery.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Color Doppler Vascular Reads</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Obstetric &amp; Fetal Anomaly Scans</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Abdominal &amp; Small Parts Review</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Doppler</span><span class="svc-footer-chip">Obstetric</span><span class="svc-footer-chip">Abdomen USG</span><span class="svc-footer-chip">Thyroid</span><span class="svc-footer-chip">Scrotal</span>
            </div>
          </div>

          <!-- Subspecialty -->
          <div class="svc-panel" id="svc-subspecialty">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg></div>
              <div>
                <span class="svc-panel-cat">Expert Interpretation</span>
                <h3 class="svc-panel-title">Subspecialty Reads</h3>
                <p class="svc-panel-sub">Domain-Specific Expert Interpretations</p>
              </div>
              <span class="svc-panel-badge">Board Certified</span>
            </div>
            <p class="svc-panel-desc">Domain-specific imaging reads are reported by radiologists trained in Neuroradiology, Musculoskeletal Imaging, Cardiothoracic Imaging, Oncology and Obstetric Imaging.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Neuro &amp; MSK Board Radiologists</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Cardiothoracic &amp; Vascular Specialists</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Oncology &amp; Obstetric Imaging</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Neuro</span><span class="svc-footer-chip">MSK</span><span class="svc-footer-chip">Cardiothoracic</span><span class="svc-footer-chip">Oncology</span><span class="svc-footer-chip">Obstetric</span>
            </div>
          </div>

          <!-- Nighthawk -->
          <div class="svc-panel" id="svc-nighthawk">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg></div>
              <div>
                <span class="svc-panel-cat">Emergency</span>
                <h3 class="svc-panel-title">Nighthawk &amp; Stat Reads</h3>
                <p class="svc-panel-sub">Nighttime Radiology Coverage, Daytime Peace of Mind</p>
              </div>
              <span class="svc-panel-badge stat">24/7 Nighthawk</span>
            </div>
            <p class="svc-panel-desc">Overnight and emergency reads are reported so your nightshift won't be unproductive, leaving undetermined cases for the morning hours.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Rapid Access to Radiologists</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Expedited Reporting for Decisive Action</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Uninterrupted Expert Care Around the Clock</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Overnight</span><span class="svc-footer-chip">Emergency</span><span class="svc-footer-chip">ED Coverage</span><span class="svc-footer-chip">ICU</span><span class="svc-footer-chip">Prelim Reads</span>
            </div>
          </div>

          <!-- Second Opinions -->
          <div class="svc-panel" id="svc-second">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg></div>
              <div>
                <span class="svc-panel-cat">Peer Review &amp; QA</span>
                <h3 class="svc-panel-title">Second Opinions</h3>
                <p class="svc-panel-sub">Clinical Certainty for Complex Cases</p>
              </div>
              <span class="svc-panel-badge">Peer Review</span>
            </div>
            <p class="svc-panel-desc">For your complex and/or conflicting cases, we provide an additional clinical level of certainty through independent subspecialty reviews.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Independent Quality Assurance Review</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Detailed Peer Audit Reports</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Conflict Resolution &amp; Expert Consensus</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Blinded Review</span><span class="svc-footer-chip">Discrepancy</span><span class="svc-footer-chip">Medico-legal</span><span class="svc-footer-chip">Consensus</span><span class="svc-footer-chip">Complex Cases</span>
            </div>
          </div>


        </div><!-- /svc-detail-panel -->

      </div><!-- /svc-explorer -->
    </div>
  </section>

  <!-- WHY US SECTION -->
  <section class="why-us" id="why-us">
    <div class="container" style="position:relative; z-index:2;">

      <!-- WHY US — ASYMMETRIC HERO -->
      <div class="why-top reveal">
        <div class="why-top-left">
          <span class="eyebrow" style="color:var(--teal);">WHY US</span>
          <h2 class="why-headline">HOSPITALS WHO WORK WITH US<br><em class="why-em">ALWAYS GET A CALL BACK.</em></h2>
          <div class="why-divider"></div>
          <p class="lead-why">Ask any radiology coordinator what the biggest disconnect is with teleradiology. The answer is almost always the silence that occurs within the process. There is no one to contact if there are questions, and the response deadlines for the reports come and go without an explanation. These issues are what we aim to address with Trust and Hope Rad Pvt Ltd.</p>
        </div>
        <div class="why-top-right">
          <div class="why-pull-quote">
            <span class="why-quote-mark">&ldquo;</span>
            <p>Radio silence is the enemy of good patient care. We built our entire operation around the belief that a radiologist should be reachable, always.</p>
            <cite>- TAH Rad, Clinical Operations</cite>
          </div>
        </div>
      </div>

      <!-- WHY US — ALTERNATING FEATURE ROWS -->
      <div class="why-features reveal-stagger">

        <div class="why-feature-row">
          <div class="why-feature-icon-col">
            <div class="why-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <span class="why-feature-num">01</span>
          </div>
          <div class="why-feature-body">
            <h4>Avoiding Queue Theory</h4>
            <p>Your team has a direct contact for communication, not an ever-changing support inbox. Speak directly to radiologists when every minute matters.</p>
          </div>
          <div class="why-feature-tag">Direct Access</div>
        </div>

        <div class="why-feature-divider"></div>

        <div class="why-feature-row why-feature-row--alt">
          <div class="why-feature-icon-col">
            <div class="why-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <span class="why-feature-num">02</span>
          </div>
          <div class="why-feature-body">
            <h4>We&rsquo;ve Got Your Back</h4>
            <p>We hold ourselves accountable for our promises. Strict turnaround time SLAs with guaranteed report completion times.</p>
          </div>
          <div class="why-feature-tag">SLA Guarantee</div>
        </div>

        <div class="why-feature-divider"></div>

        <div class="why-feature-row">
          <div class="why-feature-icon-col">
            <div class="why-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <span class="why-feature-num">03</span>
          </div>
          <div class="why-feature-body">
            <h4>Large Radiology Network</h4>
            <p>Your reports will not be delayed because of the unavailability of one radiologist. <span data-stat-val="radiologists">140+</span> subspecialty radiologists on call 24/7/365.</p>
          </div>
          <div class="why-feature-tag"><span data-stat-val="radiologists">140+</span> Specialists</div>
        </div>

        <div class="why-feature-divider"></div>

        <div class="why-feature-row why-feature-row--alt">
          <div class="why-feature-icon-col">
            <div class="why-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <span class="why-feature-num">04</span>
          </div>
          <div class="why-feature-body">
            <h4>Lots of Volume, Still Personal</h4>
            <p>We have a responsive and dedicated team, and have reported over a million studies, with more to come while maintaining personal doctor rapport.</p>
          </div>
          <div class="why-feature-tag">1M+ Studies</div>
        </div>

        <div class="why-feature-divider"></div>

        <div class="why-feature-row">
          <div class="why-feature-icon-col">
            <div class="why-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            </div>
            <span class="why-feature-num">05</span>
          </div>
          <div class="why-feature-body">
            <h4>Pioneer in Teleradiology</h4>
            <p>Trusted partner for hospitals and imaging centers across India with multi-level quality assurance and cloud PACS workflow.</p>
          </div>
          <div class="why-feature-tag">Multi-Level QA</div>
        </div>

        <div class="why-feature-divider"></div>

        <div class="why-feature-row why-feature-row--alt">
          <div class="why-feature-icon-col">
            <div class="why-feature-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </div>
            <span class="why-feature-num">06</span>
          </div>
          <div class="why-feature-body">
            <h4>24/7 Direct Customer Support</h4>
            <p>Never experience radio silence. Immediate escalation pathways and doctor-to-doctor consultation whenever critical findings emerge.</p>
          </div>
          <div class="why-feature-tag">Zero Silence</div>
        </div>

      </div>

      <div class="text-center mt-4 pt-3 reveal">
        <div class="d-inline-flex flex-wrap gap-2 justify-content-center">
          <a href="/our-team" class="btn-custom btn-custom-primary">Meet Our 140+ Radiologists →</a>
          <a href="/how-reporting-works" class="btn-custom btn-custom-ghost">How Reporting Works →</a>
          <a href="/where-we-work" class="btn-custom btn-custom-ghost">Pan-India Coverage →</a>
        </div>
      </div>

      <!-- MAP SHOWCASE BANNER -->
      <div class="row mt-5 reveal">
        <div class="col-12">
          <div style="background: radial-gradient(circle at 80% 50%, rgba(43, 168, 183, 0.2), transparent 65%), linear-gradient(135deg, #0A1C33 0%, #0E2440 100%); border: 1px solid rgba(43, 168, 183, 0.35); border-radius: 24px; padding: clamp(28px, 4vw, 48px); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4); backdrop-filter: blur(12px); position: relative; overflow: hidden;">
            
            <!-- NEWS CHANNEL TICKER MARQUEE -->
            <div class="news-ticker-container">
              <div class="news-ticker-wrapper">
                <div class="news-ticker-track">
                  <span class="news-ticker-item">MAHARASHTRA <span class="dot">•</span></span>
                  <span class="news-ticker-item">UTTAR PRADESH <span class="dot">•</span></span>
                  <span class="news-ticker-item">DELHI NCR <span class="dot">•</span></span>
                  <span class="news-ticker-item">KARNATAKA <span class="dot">•</span></span>
                  <span class="news-ticker-item">TAMIL NADU <span class="dot">•</span></span>
                  <span class="news-ticker-item">KERALA <span class="dot">•</span></span>
                  <span class="news-ticker-item">GUJARAT <span class="dot">•</span></span>
                  <span class="news-ticker-item">RAJASTHAN <span class="dot">•</span></span>
                  <span class="news-ticker-item">WEST BENGAL <span class="dot">•</span></span>
                  <span class="news-ticker-item">MADHYA PRADESH <span class="dot">•</span></span>
                  <span class="news-ticker-item">ANDHRA PRADESH <span class="dot">•</span></span>
                  <span class="news-ticker-item">TELANGANA <span class="dot">•</span></span>
                  <span class="news-ticker-item">BIHAR <span class="dot">•</span></span>
                  <span class="news-ticker-item">ODISHA <span class="dot">•</span></span>
                  <span class="news-ticker-item">PUNJAB <span class="dot">•</span></span>
                  <span class="news-ticker-item">HARYANA <span class="dot">•</span></span>
                  <span class="news-ticker-item">ASSAM <span class="dot">•</span></span>
                  <span class="news-ticker-item">CHHATTISGARH <span class="dot">•</span></span>
                  <span class="news-ticker-item">JHARKHAND <span class="dot">•</span></span>

                  <!-- DUPLICATE FOR INFINITE LOOP -->
                  <span class="news-ticker-item">MAHARASHTRA <span class="dot">•</span></span>
                  <span class="news-ticker-item">UTTAR PRADESH <span class="dot">•</span></span>
                  <span class="news-ticker-item">DELHI NCR <span class="dot">•</span></span>
                  <span class="news-ticker-item">KARNATAKA <span class="dot">•</span></span>
                  <span class="news-ticker-item">TAMIL NADU <span class="dot">•</span></span>
                  <span class="news-ticker-item">KERALA <span class="dot">•</span></span>
                  <span class="news-ticker-item">GUJARAT <span class="dot">•</span></span>
                  <span class="news-ticker-item">RAJASTHAN <span class="dot">•</span></span>
                  <span class="news-ticker-item">WEST BENGAL <span class="dot">•</span></span>
                  <span class="news-ticker-item">MADHYA PRADESH <span class="dot">•</span></span>
                  <span class="news-ticker-item">ANDHRA PRADESH <span class="dot">•</span></span>
                  <span class="news-ticker-item">TELANGANA <span class="dot">•</span></span>
                  <span class="news-ticker-item">BIHAR <span class="dot">•</span></span>
                  <span class="news-ticker-item">ODISHA <span class="dot">•</span></span>
                  <span class="news-ticker-item">PUNJAB <span class="dot">•</span></span>
                  <span class="news-ticker-item">HARYANA <span class="dot">•</span></span>
                  <span class="news-ticker-item">ASSAM <span class="dot">•</span></span>
                  <span class="news-ticker-item">CHHATTISGARH <span class="dot">•</span></span>
                  <span class="news-ticker-item">JHARKHAND <span class="dot">•</span></span>
                </div>
              </div>
            </div>

            <div class="row align-items-center g-4 g-lg-5">
              <div class="col-12 col-lg-6">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <span class="eyebrow" style="color:var(--teal); margin: 0;">PAN-INDIA COVERAGE</span>
                </div>

                <h3 style="font-size: clamp(26px, 3vw, 38px); color: #FFFFFF; font-weight: 700; margin-top: 8px; line-height: 1.25;">
                  <span data-stat-val="states">15+</span> States Covered in India
                </h3>

                <p style="color: #C3D5EB; font-size: 15.5px; margin: 16px 0 24px 0; line-height: 1.65; text-align: left !important;">
                  From major city trauma centers to regional diagnostic clinics, our network of <span data-stat-val="radiologists" style="color: #FFFFFF; font-weight: 600;">140+</span> board-certified radiologists delivers 24x7 teleradiology reporting across India.
                </p>

                <!-- MAP BANNER METRIC MINI BADGES -->
                <div class="row g-2 mb-4">
                  <div class="col-4">
                    <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(43, 168, 183, 0.2); border-radius: 12px; padding: 12px 10px; text-align: center;">
                      <div style="font-family: var(--font-mono); font-size: 20px; font-weight: 700; color: #FFFFFF; line-height: 1;"><span data-stat-val="centres">350+</span></div>
                      <div style="font-size: 11px; color: #8DA5C4; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600;">Centres</div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(43, 168, 183, 0.2); border-radius: 12px; padding: 12px 10px; text-align: center;">
                      <div style="font-family: var(--font-mono); font-size: 20px; font-weight: 700; color: #FFFFFF; line-height: 1;"><span data-stat-val="radiologists">140+</span></div>
                      <div style="font-size: 11px; color: #8DA5C4; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600;">Doctors</div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(43, 168, 183, 0.2); border-radius: 12px; padding: 12px 10px; text-align: center;">
                      <div style="font-family: var(--font-mono); font-size: 20px; font-weight: 700; color: #2BA8B7; line-height: 1;">15-30m</div>
                      <div style="font-size: 11px; color: #8DA5C4; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600;">Stat SLA</div>
                    </div>
                  </div>
                </div>

                <!-- CTA BUTTON ROW -->
                <div class="d-flex flex-wrap align-items-center gap-2 pt-1">
                  <a href="/where-we-work" class="btn-custom btn-custom-primary" style="padding: 12px 22px; font-size: 14px;">Explore Coverage Map &rarr;</a>
                  <a href="/our-team" class="btn-custom btn-custom-ghost" style="border-color: rgba(43, 168, 183, 0.4) !important; color: #FFFFFF !important; background: rgba(255, 255, 255, 0.08) !important; padding: 12px 18px; font-size: 14px;">Our Team &rarr;</a>
                  <a href="/how-reporting-works" class="btn-custom btn-custom-ghost" style="border-color: rgba(43, 168, 183, 0.4) !important; color: #FFFFFF !important; background: rgba(255, 255, 255, 0.08) !important; padding: 12px 18px; font-size: 14px;">How It Works &rarr;</a>
                </div>
              </div>

              <!-- RIGHT MAP GRAPHIC -->
              <div class="col-12 col-lg-6 text-center">
                <div style="position: relative; display: inline-block; width: 100%;">
                  <img src="${indianMapUrl}" alt="Pan India Teleradiology Reporting Map" style="max-height: 440px; width: 100%; object-fit: contain; border-radius: 16px; filter: drop-shadow(0 0 35px rgba(43, 168, 183, 0.45)); transition: transform 0.3s ease;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT SECTION -->
  <section class="contact" id="contact">
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-12 col-lg-6 contact-info reveal">
          <span class="eyebrow">GET IN TOUCH</span>
          <h2>Partner with Trust &amp; Hope Rad Today</h2>
          <p>Ready to eliminate radiology reporting delays and give your clinical team direct radiologist access? Reach out to schedule a demo or set up your hospital workflow.</p>
          
          <div class="office">
            <h4>REGISTERED OFFICE</h4>
            <p>Trust and Hope Rad Pvt. Ltd.<br>India</p>
            <p><strong>Direct Helpline:</strong> +91-XXXXX-XXXXX<br><strong>Email:</strong> contact@tahrad.com</p>
          </div>
        </div>

        <div class="col-12 col-lg-6 reveal">
          <form id="contact-form" class="contact-form">
            <h3 style="font-size:19px; margin-bottom:14px; color:var(--deep-navy);">Request a Partnership Callback</h3>
            <div class="row g-2">
              <div class="col-12 col-md-6 field">
                <label for="name">Your Name</label>
                <input type="text" id="name" required placeholder="Dr. / Mr. / Ms. Name" autocomplete="name">
              </div>
              <div class="col-12 col-md-6 field">
                <label for="hospital">Hospital / Center Name</label>
                <input type="text" id="hospital" required placeholder="Hospital / Diagnostic Name" autocomplete="organization">
              </div>
              <div class="col-12 col-md-6 field">
                <label for="email">Work Email</label>
                <input type="email" id="email" required placeholder="name@hospital.com" autocomplete="email">
              </div>
              <div class="col-12 col-md-6 field">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" required placeholder="+91 98765 43210" autocomplete="tel">
              </div>
              <div class="col-12 field">
                <label for="modality">Primary Modality Needs</label>
                <select id="modality">
                  <option value="Full-Spectrum">Full-Spectrum (CT, MRI, X-Ray, PET, USG)</option>
                  <option value="CT-MRI">CT &amp; MRI Reporting</option>
                  <option value="Nighthawk">Nighthawk &amp; Emergency Stat Reads</option>
                  <option value="Subspecialty">Subspecialty Reads</option>
                  <option value="Second-Opinion">Second Opinions &amp; QA</option>
                </select>
              </div>
              <div class="col-12 field">
                <label for="message">Message / Daily Scan Volume</label>
                <textarea id="message" rows="2" placeholder="Tell us about your daily scan volume and reporting requirements..."></textarea>
              </div>
            </div>
            <button type="submit" class="submit-btn mt-2">Submit Request →</button>
            <div id="form-msg">Thank you! Your request has been submitted. Our team will call you back shortly.</div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <div class="row g-4 g-lg-5">
      <div class="col-12 col-lg-5 pe-lg-4">
        <a href="#hero" class="brand">
          <img src="${logoUrl}" alt="Trust and Hope Rad logo">
          <span>TAH RAD</span>
        </a>
        <p data-stat-summary>Trust and Hope Rad Pvt. Ltd. | 24×7 teleradiology services serving 350+ centres, 1000+ new studies uploaded daily to PACS, 140+ radiologists across specialisations, 15+ states covered in India.</p>
      </div>
      <div class="col-6 col-lg-3 offset-lg-1">
        <h5>Navigate</h5>
        <ul>
          <li><a href="#who-we-are">About Us</a></li>
          <li><a href="/our-team">Our Team</a></li>
          <li><a href="/where-we-work">Where We Work</a></li>
          <li><a href="/how-reporting-works">How It Works</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="col-6 col-md-3 col-lg-3">
        <h5>Modalities</h5>
        <ul>
          <li><a href="#services">CT Reporting</a></li>
          <li><a href="#services">MRI Reporting</a></li>
          <li><a href="#services">X-Ray &amp; USG Reads</a></li>
          <li><a href="#services">PET Oncology Scans</a></li>
          <li><a href="#services">Nighthawk &amp; Stat Reads</a></li>
        </ul>
      </div>
    </div>

    <div class="foot-bottom">
      <span>© ${new Date().getFullYear()} Trust and Hope Rad Pvt. Ltd. All rights reserved.</span>
      <span>Read Right. Read Fast. 24/7.</span>
    </div>
  </div>
</footer>

<button id="back-to-top" aria-label="Back to Top">↑</button>
`;
