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
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <button class="burger" id="burger-btn" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</header>

<div class="mobile-drawer" id="mobile-drawer">
  <a href="#who-we-are">About Us</a>
  <a href="/our-team">Our Team</a>
  <a href="/where-we-work">Where We Work</a>
  <a href="/how-reporting-works">How It Works</a>
  <a href="#services">Services</a>
  <a href="#why-us">Why Us</a>
  <a href="#contact">Contact</a>
  <a href="#contact" class="nav-cta">Partner With Us</a>
</div>

<main>
  <!-- HERO SECTION -->
  <section class="hero" id="hero">
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-12 col-lg-7 reveal">
          <span class="eyebrow">24×7 Teleradiology Reporting</span>
          <h1>FULL-SPECTRUM TELERADIOLOGY,<br><em>ONE REPORTING PARTNER</em></h1>
          <p class="lead">From X-Rays to specialty MRIs, we cover the entire diagnostic imaging spectrum so you don't have to work with multiple vendors for different modalities.</p>
          
          <div class="hero-ctas">
            <a href="#contact" class="btn-custom btn-custom-primary">Partner With Us →</a>
            <a href="#services" class="btn-custom btn-custom-ghost">Explore Services</a>
          </div>

          <div class="hero-quick-nav mt-3 pt-2 d-flex flex-wrap gap-2">
            <a href="/our-team" class="btn-custom btn-custom-ghost" style="padding: 9px 18px; font-size: 13.5px; border-color: rgba(43,168,183,0.3) !important;">Our Team →</a>
            <a href="/where-we-work" class="btn-custom btn-custom-ghost" style="padding: 9px 18px; font-size: 13.5px; border-color: rgba(43,168,183,0.3) !important;">Where We Work →</a>
            <a href="/how-reporting-works" class="btn-custom btn-custom-ghost" style="padding: 9px 18px; font-size: 13.5px; border-color: rgba(43,168,183,0.3) !important;">How It Works →</a>
            <a href="#why-us" class="btn-custom btn-custom-ghost" style="padding: 9px 18px; font-size: 13.5px; border-color: rgba(43,168,183,0.3) !important;">Why Us →</a>
          </div>
        </div>

        <div class="col-12 col-lg-5 reveal">
          <div class="scan-panel">
            <div class="panel-head">
              <span>TAH RAD PACS | LIVE NETWORK</span>
              <div class="dots"><i></i><i></i><i></i></div>
            </div>
            <div class="scan-stage">
              <video id="hero-scan-video" src="${heroVideo1Url}" data-next-src="${heroVideo2Url}" autoplay muted playsinline class="scan-video"></video>
              <div class="scan-line"></div>
            </div>
            <div class="panel-head mt-3 mb-0">
              <span>STATUS: ONLINE &amp; REPORTING</span>
              <span style="color:var(--teal);">24/7 ACTIVE</span>
            </div>
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

  <!-- WHAT WE REPORT / SERVICES SECTION -->
  <section class="services" id="services">
    <div class="container">
      <div class="row mb-4 reveal text-center justify-content-center">
        <div class="col-12 col-lg-9">
          <span class="eyebrow">WHAT WE DO</span>
          <h2 style="font-size:clamp(30px, 4vw, 48px); margin-top:10px;">FULL-SPECTRUM TELERADIOLOGY,<br><em style="font-style:normal; color:var(--teal);">ONE REPORTING PARTNER</em></h2>
        </div>
      </div>

      <!-- MODALITY REPORTING FEATURE BANNER -->
      <div class="modality-banner-box reveal">
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
          <h3 class="modality-banner-title mb-0">Timely, expert reporting across every modality</h3>
          <span style="background:rgba(63,168,69,0.12); color:#2E8533; border:1px solid rgba(63,168,69,0.3); font-family:var(--font-mono); font-size:12px; font-weight:600; padding:6px 16px; border-radius:100px;">🟢 24/7 ACTIVE NETWORK</span>
        </div>
        <div class="modality-pills mb-3">
          <span class="modality-pill">Emergency</span>
          <span class="modality-pill">Routine</span>
          <span class="modality-pill">Subspecialty</span>
          <span class="modality-pill">Night Reporting</span>
          <span class="modality-pill">Second Opinion</span>
        </div>
        <p class="modality-banner-desc">We help healthcare providers access timely, expert radiology reporting, delivering high-quality diagnostic interpretations remotely without depending only on on-site radiologist availability.</p>
        <div class="d-flex flex-wrap gap-2 mt-3">
          <a href="/how-reporting-works" class="btn-custom btn-custom-primary">See How Reporting Works →</a>
          <a href="/our-team" class="btn-custom btn-custom-ghost">Radiologist Panel →</a>
          <a href="/where-we-work" class="btn-custom btn-custom-ghost">Where We Work →</a>
        </div>
      </div>

      <!-- CATEGORY FILTER TABS -->
      <div class="service-filter-bar reveal mb-4" id="service-filter-bar">
        <button className="service-filter-btn active" data-filter="all">All Services (11)</button>
        <button className="service-filter-btn" data-filter="emergency">Emergency &amp; Stat</button>
        <button className="service-filter-btn" data-filter="cross-sectional">CT &amp; MRI Scans</button>
        <button className="service-filter-btn" data-filter="subspecialty">Subspecialty &amp; PET</button>
        <button className="service-filter-btn" data-filter="advanced">Advanced 3D &amp; AI PACS</button>
      </div>

      <!-- CARDS GRID -->
      <div class="row g-4 reveal-stagger" id="services-grid">
        <!-- 1. CT -->
        <div class="col-12 col-md-6 col-lg-4 service-col" data-category="emergency cross-sectional">
          <div class="service-card">
            <div class="card-head">
              <div class="icn">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <span class="card-badge stat-badge">⚡ Sub-Hour SLA</span>
            </div>
            <h4>CT Reporting</h4>
            <p class="subtitle">Fast &amp; Accurate Computed Tomography</p>
            <p class="desc">High-speed CT reporting for head, chest, abdomen, angiography, and polytrauma emergencies with sub-hour stat delivery.</p>
            <ul class="service-bullets">
              <li>Trauma &amp; Stroke Emergency Reads</li>
              <li>3D Angiography &amp; Vessel Analysis</li>
              <li>Routine Abdominal &amp; Chest Scans</li>
            </ul>
          </div>
        </div>

        <!-- 2. MRI -->
        <div class="col-12 col-md-6 col-lg-4 service-col" data-category="cross-sectional subspecialty">
          <div class="service-card">
            <div class="card-head">
              <div class="icn">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
              </div>
              <span class="card-badge">🧠 Subspecialty</span>
            </div>
            <h4>MRI Reporting</h4>
            <p class="subtitle">High-Resolution Soft Tissue Diagnostic</p>
            <p class="desc">Comprehensive MRI interpretations covering neuroradiology, spine, musculoskeletal joints, pelvic, and cardiac studies.</p>
            <ul class="service-bullets">
              <li>Subspecialty Neuroradiology &amp; Spine</li>
              <li>MSK Joint &amp; Cartilage Imaging</li>
              <li>Multiparametric Prostate &amp; Abdomen</li>
            </ul>
          </div>
        </div>

        <!-- 3. X-Ray -->
        <div class="col-12 col-md-6 col-lg-4 service-col" data-category="routine">
          <div class="service-card">
            <div class="card-head">
              <div class="icn">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/></svg>
              </div>
              <span class="card-badge">📄 24/7 Digital</span>
            </div>
            <h4>X-Ray Reporting</h4>
            <p class="subtitle">24/7 Digital Radiography</p>
            <p class="desc">Rapid turnaround for high-volume plain radiography, chest X-rays, trauma skeletal series, and routine screening.</p>
            <ul class="service-bullets">
              <li>Chest &amp; Cardiac Radiography</li>
              <li>Orthopedic Skeletal Series</li>
              <li>High-Volume Batch Reporting</li>
            </ul>
          </div>
        </div>

        <!-- 4. PET -->
        <div class="col-12 col-md-6 col-lg-4 service-col" data-category="subspecialty advanced">
          <div class="service-card">
            <div class="card-head">
              <div class="icn">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 0 0 7 7M12 22a7 7 0 0 0-7-7"/></svg>
              </div>
              <span class="card-badge">🔬 Oncology Staging</span>
            </div>
            <h4>PET Reporting</h4>
            <p class="subtitle">Oncology &amp; Metabolic Imaging</p>
            <p class="desc">Specialized PET/CT molecular imaging reads for cancer staging, therapy evaluation, and metabolic lesion tracking.</p>
            <ul class="service-bullets">
              <li>Oncology Staging &amp; Restaging</li>
              <li>FDG Whole-Body Scans</li>
              <li>Radiotracer Uptake Quantification</li>
            </ul>
          </div>
        </div>

        <!-- 5. USG -->
        <div class="col-12 col-md-6 col-lg-4 service-col" data-category="routine">
          <div class="service-card">
            <div class="card-head">
              <div class="icn">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h4l3-9 4 18 3-9h4"/></svg>
              </div>
              <span class="card-badge"> Doppler Vascular</span>
            </div>
            <h4>USG Reporting</h4>
            <p class="subtitle">Ultrasonography &amp; Color Doppler</p>
            <p class="desc">Expert review for general ultrasound, Doppler vascular studies, anomaly scans, and pelvic diagnostic imagery.</p>
            <ul class="service-bullets">
              <li>Color Doppler Vascular Reads</li>
              <li>Obstetric &amp; Fetal Anomaly Scans</li>
              <li>Abdominal &amp; Small Parts Review</li>
            </ul>
          </div>
        </div>

        <!-- 6. Subspecialty Reads -->
        <div class="col-12 col-md-6 col-lg-4 service-col" data-category="subspecialty">
          <div class="service-card">
            <div class="card-head">
              <div class="icn">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <span class="card-badge">🎓 Board Certified</span>
            </div>
            <h4>Subspecialty Reads</h4>
            <p class="subtitle">Domain-Specific Expert Interpretations</p>
            <p class="desc">Domain-specific imaging reads are reported by radiologists trained in Neuroradiology, Musculoskeletal Imaging, Cardiothoracic Imaging, Oncology and Obstetric Imaging.</p>
            <ul class="service-bullets">
              <li>Neuro &amp; MSK Board Radiologists</li>
              <li>Cardiothoracic &amp; Vascular Specialists</li>
              <li>Oncology &amp; Obstetric Imaging</li>
            </ul>
          </div>
        </div>

        <!-- 7. Nighthawk & Stat Reads -->
        <div class="col-12 col-md-6 col-lg-4 service-col" data-category="emergency">
          <div class="service-card">
            <div class="card-head">
              <div class="icn">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              </div>
              <span class="card-badge stat-badge">🌙 24/7 Nighthawk</span>
            </div>
            <h4>Nighthawk &amp; Stat Reads</h4>
            <p class="subtitle">Nighttime Radiology Coverage, Daytime Peace of Mind</p>
            <p class="desc">Overnight and emergency reads are reported so your nightshift won’t be unproductive, leaving undetermined cases for the morning hours.</p>
            <ul class="service-bullets">
              <li>Rapid Access to Radiologists</li>
              <li>Expedited Reporting for Decisive Action</li>
              <li>Uninterrupted Expert Care Around the Clock</li>
            </ul>
          </div>
        </div>

        <!-- 8. Second Opinions -->
        <div class="col-12 col-md-6 col-lg-4 service-col" data-category="subspecialty">
          <div class="service-card">
            <div class="card-head">
              <div class="icn">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </div>
              <span class="card-badge">🛡️ Peer Review</span>
            </div>
            <h4>Second Opinions</h4>
            <p class="subtitle">Clinical Certainty for Complex Cases</p>
            <p class="desc">For your complex and/or conflicting cases, we provide an additional clinical level of certainty through independent subspecialty reviews.</p>
            <ul class="service-bullets">
              <li>Independent Quality Assurance Review</li>
              <li>Detailed Peer Audit Reports</li>
              <li>Conflict Resolution &amp; Expert Consensus</li>
            </ul>
          </div>
        </div>

        <!-- 9. Tele 3D Imaging & Post-Processing -->
        <div class="col-12 col-md-6 col-lg-4 service-col" data-category="advanced">
          <div class="service-card">
            <div class="card-head">
              <div class="icn">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <span class="card-badge">📐 3D Post-Process</span>
            </div>
            <h4>Tele 3D Imaging &amp; Post-Processing</h4>
            <p class="subtitle">Adding Depth to Detail: Enhanced 3D Reporting</p>
            <p class="desc">Precision imaging for informed decisions with in-depth insights with 3D visualization for critical vascular and surgical planning.</p>
            <ul class="service-bullets">
              <li>Precision Imaging for Informed Decisions</li>
              <li>In-Depth 3D Reconstruction Insights</li>
              <li>Increased Confidence in Interpretations</li>
            </ul>
          </div>
        </div>

        <!-- 10. AI-Enabled RIS PACS Workflow -->
        <div class="col-12 col-md-6 col-lg-4 service-col" data-category="advanced">
          <div class="service-card">
            <div class="card-head">
              <div class="icn">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <span class="card-badge">🔌 DICOM Ready</span>
            </div>
            <h4>AI-Enabled RIS PACS Workflow</h4>
            <p class="subtitle">Intelligent Workflow, Inspired Care</p>
            <p class="desc">Simplify, streamline, and future-proof your radiology department with seamless integration into existing hospital DICOM &amp; PACS systems.</p>
            <ul class="service-bullets">
              <li>Simplify, Streamline, Future-Proof</li>
              <li>Seamless Integration with Existing Systems</li>
              <li>AI-Assisted Analysis for Faster Reports</li>
            </ul>
          </div>
        </div>

        <!-- 11. Independent Quality Assurance -->
        <div class="col-12 col-md-6 col-lg-4 service-col" data-category="subspecialty">
          <div class="service-card">
            <div class="card-head">
              <div class="icn">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <span class="card-badge">📊 Audit &amp; QA</span>
            </div>
            <h4>Independent Quality Assurance</h4>
            <p class="subtitle">Quality You Can Count On</p>
            <p class="desc">Receive regular feedback, audit reports, and statistical analyses to minimize errors and continuously improve overall radiologic quality.</p>
            <ul class="service-bullets">
              <li>Targeted Peer Review &amp; Audits</li>
              <li>Statistical Error Reduction Analyses</li>
              <li>Transparent Service with No Hidden Costs</li>
            </ul>
          </div>
        </div>
      </div>
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
          <div class="why-ribbon">
            <div class="why-ribbon-item">
              <strong data-stat-val="centres">350+</strong>
              <span>Centres Served</span>
            </div>
            <div class="why-ribbon-sep"></div>
            <div class="why-ribbon-item">
              <strong data-stat-val="radiologists">140+</strong>
              <span>Radiologists On Call</span>
            </div>
            <div class="why-ribbon-sep"></div>
            <div class="why-ribbon-item">
              <strong>24/7</strong>
              <span>Always Active</span>
            </div>
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
      <div class="row g-5">
        <div class="col-12 col-lg-5 contact-info reveal">
          <span class="eyebrow">GET IN TOUCH</span>
          <h2>Partner with Trust &amp; Hope Rad Today</h2>
          <p>Ready to eliminate radiology reporting delays and give your clinical team direct radiologist access? Reach out to schedule a demo or set up your hospital workflow.</p>
          
          <div class="office">
            <h4>REGISTERED OFFICE</h4>
            <p>Trust and Hope Rad Pvt. Ltd.<br>India</p>
            <p><strong>Direct Helpline:</strong> +91-XXXXX-XXXXX<br><strong>Email:</strong> contact@tahrad.com</p>
          </div>
        </div>

        <div class="col-12 col-lg-7 reveal">
          <form id="contact-form" class="contact-form">
            <h3 style="font-size:22px; margin-bottom:20px; color:var(--deep-navy);">Request a Partnership Callback</h3>
            <div class="row g-3">
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
                <textarea id="message" rows="3" placeholder="Tell us about your daily scan volume and reporting requirements..."></textarea>
              </div>
            </div>
            <button type="submit" class="submit-btn mt-3">Submit Request →</button>
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
