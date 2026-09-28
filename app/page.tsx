import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileText,
  HeartHandshake,
  IdCard,
  Landmark,
  LockKeyhole,
  Route,
  ShieldCheck,
  Sparkles,
  Upload,
  UsersRound,
} from "lucide-react";

const applicationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeRBNplIPFlhRaIUao0wq9WydiV9Fj8xC_4VZg628U-agITfA/viewform?usp=header";

const quickLinks = [
  ["What LSWP Aid is", "#about"],
  ["Am I eligible?", "#eligibility"],
  ["How to apply", "#apply"],
  ["Frequently asked questions", "#questions"],
];

const supportAreas = [
  {
    icon: HeartHandshake,
    title: "Urgent welfare needs",
    text: "Situations affecting a student's immediate health, safety, or well-being.",
  },
  {
    icon: Landmark,
    title: "Academic continuity",
    text: "Time-sensitive needs that may interrupt a student's ability to continue their studies.",
  },
  {
    icon: UsersRound,
    title: "Meaningful student participation",
    text: "Welfare-related needs that affect meaningful participation in student life.",
  },
];

const requiredDocuments = [
  { icon: FileText, title: "Application letter", text: "Use the template below and explain your situation clearly." },
  { icon: ClipboardCheck, title: "Current EAF", text: "Your Enrollment Assessment Form for the current term." },
  { icon: IdCard, title: "DLSU ID", text: "A clear copy of your current ID." },
  { icon: Upload, title: "Supporting documents", text: "Relevant forms or proof for the assistance requested, when available." },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="Students walking together on campus" />
        <div className="site-shell hero-content">
          <a className="wordmark" href="#top" aria-label="LSWP Aid home">
            <span className="wordmark-logo">
              <img src="/images/student-success-center-logo-white.png" alt="Student Success Center" />
            </span>
            <span>
              <strong>LSWP Aid</strong>
              <small>Lasallian Student Welfare Program</small>
            </span>
          </a>

          <nav className="top-nav" aria-label="Primary navigation">
            {quickLinks.slice(0, 3).map(([label, href]) => (
              <a href={href} key={href}>{label}</a>
            ))}
            <a className="nav-apply" href={applicationFormUrl} target="_blank" rel="noreferrer">
              Apply now <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>

          <div className="hero-copy" id="top">
            <p className="eyebrow"><span /> Student support, when it matters</p>
            <h1 id="hero-title">A little help can keep your path moving.</h1>
            <p className="hero-lede">
              LSWP Aid provides limited, need-based support to currently enrolled
              Lasallian students facing circumstances that affect their well-being,
              safety, or ability to continue their studies.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={applicationFormUrl} target="_blank" rel="noreferrer">
                Open application form <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-quiet" href="#apply">
                See how to apply <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-strip" id="about">
        <div className="site-shell intro-grid">
          <div>
            <p className="eyebrow eyebrow-dark"><span /> What this program is</p>
            <h2>Support for an urgent moment, not a promise of ongoing funding.</h2>
          </div>
          <div className="intro-text">
            <p>
              LSWP Aid is emergency and welfare assistance. It is not a scholarship,
              tuition discount, recurring subsidy, or entitlement. Each request is reviewed
              confidentially and decided based on verified need, urgency, program priorities,
              and available funds.
            </p>
            <a className="text-link" href="#questions">Read the important details <ChevronRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="support-section" id="eligibility">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark"><span /> Who this is for</p>
              <h2>You may apply if you are currently enrolled and facing a verified need.</h2>
            </div>
            <p>
              The Committee gives priority to situations where timely assistance can help
              protect a student's welfare or academic continuity.
            </p>
          </div>

          <div className="support-grid">
            {supportAreas.map(({ icon: Icon, title, text }) => (
              <article className="support-item" key={title}>
                <span className="icon-tile"><Icon size={24} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="eligibility-callout">
            <BadgeCheck size={26} aria-hidden="true" />
            <p><strong>Before you apply:</strong> Please be ready to explain your situation honestly, submit complete documents, and participate in any verification or referral the Committee may need.</p>
          </div>
        </div>
      </section>

      <section className="process-section" id="apply">
        <div className="site-shell process-layout">
          <div className="process-intro">
            <p className="eyebrow eyebrow-dark"><span /> The application process</p>
            <h2>Start with the track that fits your situation.</h2>
            <p>Both tracks are reviewed with care. Choosing the expedited track does not guarantee approval, but it helps the Committee identify urgent, recommended cases quickly.</p>
            <a className="button button-primary" href={applicationFormUrl} target="_blank" rel="noreferrer">
              Go to the application form <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="track-grid">
            <article className="track-card expedited">
              <div className="card-kicker"><Sparkles size={17} aria-hidden="true" /> Expedited track</div>
              <h3>For urgent cases with a character testimony.</h3>
              <p>Choose this track when a faculty member, staff member, student leader, or other appropriate recommender can attest to your character and the urgency of your circumstances.</p>
              <ul>
                <li><Check size={16} aria-hidden="true" /> Character testimony or recommendation</li>
                <li><Check size={16} aria-hidden="true" /> Complete application and supporting documents</li>
                <li><Check size={16} aria-hidden="true" /> Further documents may follow after an initial urgent review</li>
              </ul>
            </article>

            <article className="track-card regular">
              <div className="card-kicker"><Route size={17} aria-hidden="true" /> Regular track</div>
              <h3>For requests that need a fuller assessment.</h3>
              <p>Choose this track when you do not have a recommender, your situation is not urgent, or the Committee needs more time to assess the request and available options.</p>
              <ul>
                <li><Check size={16} aria-hidden="true" /> Complete application and supporting documents</li>
                <li><Check size={16} aria-hidden="true" /> Verification or a short assessment may be requested</li>
                <li><Check size={16} aria-hidden="true" /> The Committee may suggest referrals or other support</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="steps-section">
        <div className="site-shell">
          <div className="section-heading compact-heading">
            <div>
              <p className="eyebrow eyebrow-dark"><span /> Four simple steps</p>
              <h2>What happens after you decide to apply</h2>
            </div>
          </div>
          <ol className="steps-list">
            <li><span>01</span><div><h3>Prepare your documents</h3><p>Gather your application letter, current EAF, DLSU ID, and any relevant support documents.</p></div></li>
            <li><span>02</span><div><h3>Complete the online form</h3><p>Select the application track and share your document links in the form.</p></div></li>
            <li><span>03</span><div><h3>Wait for confidential review</h3><p>The Committee may verify details, ask for clarification, or refer you to another support service.</p></div></li>
            <li><span>04</span><div><h3>Receive the outcome</h3><p>You will be informed of the decision, any approved conditions, or the next appropriate step.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="documents-section" id="documents">
        <div className="site-shell document-layout">
          <div className="document-panel">
            <p className="eyebrow eyebrow-dark"><span /> Have these ready</p>
            <h2>Your application checklist</h2>
            <p>Upload clear files to Google Drive first, then paste their shareable links into the application form.</p>
            <div className="document-list">
              {requiredDocuments.map(({ icon: Icon, title, text }) => (
                <div className="document-row" key={title}>
                  <span className="document-icon"><Icon size={20} aria-hidden="true" /></span>
                  <span><strong>{title}</strong><small>{text}</small></span>
                </div>
              ))}
            </div>
          </div>

          <aside className="letter-card">
            <span className="letter-icon"><FileText size={25} aria-hidden="true" /></span>
            <p className="card-kicker">Application letter template</p>
            <h3>Use this guide to write a clear request.</h3>
            <p>It includes the key details the Committee needs, plus the certification section used after a decision.</p>
            <a className="button button-dark" href="/downloads/LSWP-Application-Letter-Template.docx" download>
              Download application letter <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="text-link" href={applicationFormUrl} target="_blank" rel="noreferrer">Open the application form <ArrowUpRight size={16} aria-hidden="true" /></a>
          </aside>
        </div>
      </section>

      <section className="privacy-section">
        <div className="site-shell privacy-inner">
          <LockKeyhole size={28} aria-hidden="true" />
          <div><h2>Your information is handled with care.</h2><p>Your application details and documents are collected only to evaluate, verify, process, disburse, audit, refer, or support your LSWP Aid request. Access is limited to authorized personnel and handled under applicable data privacy requirements.</p></div>
          <a href="#questions" className="text-link">Privacy and review details <ChevronRight size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="faq-section" id="questions">
        <div className="site-shell faq-layout">
          <div>
            <p className="eyebrow eyebrow-dark"><span /> Good to know</p>
            <h2>Questions students often ask</h2>
            <p>When in doubt, submit a complete and honest application. The Committee can ask follow-up questions or point you to another form of support.</p>
          </div>
          <div className="faq-list">
            <details open>
              <summary>Can I apply again if I already received LSWP Aid this school year?<ChevronRight size={20} aria-hidden="true" /></summary>
              <p>Yes, but repeat requests are reviewed more carefully. You must disclose prior aid, explain the new or continuing circumstance, and submit any updated documents. Repeated aid is not automatic and remains subject to available funds.</p>
            </details>
            <details>
              <summary>Will my application be approved if I meet the requirements?<ChevronRight size={20} aria-hidden="true" /></summary>
              <p>No. LSWP Aid is discretionary. The Committee considers the verified need, urgency, program priorities, available funds, and the completeness of the application.</p>
            </details>
            <details>
              <summary>What if I do not have a recommender for a character testimony?<ChevronRight size={20} aria-hidden="true" /></summary>
              <p>You may still apply through the regular track. A recommendation helps identify an urgent case, but it is not a requirement for every student.</p>
            </details>
            <details>
              <summary>Who decides on an application?<ChevronRight size={20} aria-hidden="true" /></summary>
              <p>The LSWP Committee reviews requests. Routine approvals require at least two of the three voting members. After approval, the Academic Support Coordinator forwards the approved application to the Dean of Student Affairs.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="apply-banner">
        <div className="site-shell apply-banner-inner">
          <div><p className="eyebrow"><span /> Ready when you are</p><h2>Tell us what you need. We will review it with respect and care.</h2></div>
          <a className="button button-light" href={applicationFormUrl} target="_blank" rel="noreferrer">Start an application <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </section>

      <footer>
        <div className="site-shell footer-inner">
          <a className="wordmark footer-wordmark" href="#top"><span className="wordmark-logo"><img src="/images/student-success-center-logo-white.png" alt="Student Success Center" /></span><span><strong>LSWP Aid</strong><small>Lasallian Student Welfare Program</small></span></a>
          <p>For currently enrolled Lasallian students. Subject to the LSWP Guidelines and available funds.</p>
          <a href="#top" aria-label="Back to top" className="back-top"><ArrowDown size={18} aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}
