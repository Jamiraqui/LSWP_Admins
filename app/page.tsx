import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import DonationCalculator from "./DonationCalculator";

export const metadata: Metadata = {
  title: "LSWP | Administrator Brief",
  description: "A brief overview of LSWP Aid, its application workflow, governance, and funding safeguards.",
};

const steps = [
  ["Apply", "Student", "Submit the online form, application letter, current EAF, DLSU ID, and relevant supporting documents."],
  ["Assess", "Committee", "Review through the expedited or regular track. Verify need, urgency, and available funds."],
  ["Decide", "Voting members", "Routine approval requires at least 2 of 3 Committee votes."],
  ["Inform", "Student outcome", "Communicate the decision, any approved conditions, or the next appropriate step."],
];

export default function AdministratorBrief() {
  return (
    <main className={styles.brief} id="top">
      <header className={styles.header}>
        <a href="#top" className={styles.brand} aria-label="LSWP overview">
          <Image src="/images/student-success-center-logo-white.png" alt="Student Success Center" width={72} height={62} className={styles.logo} />
          <span>LSWP<span className={styles.brandSub}>Student Success Center</span></span>
        </a>
        <nav aria-label="Brief sections"><a href="#workflow">Workflow</a><a href="#governance">Governance</a></nav>
        <span className={styles.headerLabel}>ADMINISTRATOR BRIEF</span>
      </header>

      <section className={styles.intro} aria-labelledby="title">
        <div>
          <p className={styles.eyebrow}>LASALLIAN STUDENT WELFARE PROGRAM</p>
          <h1 id="title">Need-based assistance<br /><em>for student welfare.</em></h1>
          <p className={styles.lead}>The Lasallian Student Welfare Program Aid (LSWP Aid) provides limited, short-term assistance to currently enrolled Lasallian students facing verified health, emergency, or essential academic needs. Each request is assessed against program priorities and available funds.</p>
        </div>
        <aside className={styles.purpose}>
          <span className={styles.smallLabel}>THE PURPOSE</span>
          <h2>Support during temporary hardship</h2>
          <ul><li>Urgent welfare needs</li><li>Academic continuity</li><li>Meaningful student participation</li></ul>
          <p>Discretionary assistance—not a scholarship, tuition discount, recurring subsidy, or entitlement.</p>
        </aside>
      </section>

      <section id="categories" className={styles.categories} aria-labelledby="categories-title">
        <div className={styles.sectionHead}><div><p className={styles.eyebrow}>01 / AID CATEGORIES</p><h2 id="categories-title">Three areas of assistance</h2></div></div>
        <div className={styles.categoryGrid}>
          <article><span className={styles.smallLabel}>HEALTH</span><h3>Student Emergency Health Aid</h3><p>Urgent health expenses affecting safety, recovery, or continued study.</p><p className={styles.examples}>Examples: clinic bills, medicines, diagnostic tests.</p></article>
          <article><span className={styles.smallLabel}>STUDENT LIFE</span><h3>Student Life Assistance Program</h3><p>Short-term support for essential participation and academic continuity.</p><p className={styles.examples}>Examples: meals, transportation, books, thesis or completion requirements.</p></article>
          <article><span className={styles.smallLabel}>EMERGENCY RELIEF</span><h3>Student Emergency Relief Fund</h3><p>Temporary relief following disasters, family crises, or life-altering accidents.</p><p className={styles.examples}>Examples: essentials after a fire, flood, displacement, or loss of a primary provider.</p></article>
        </div>
      </section>

      <section id="workflow" className={styles.workflow} aria-labelledby="workflow-title">
        <div className={styles.sectionHead}><div><p className={styles.eyebrow}>02 / HOW IT WORKS</p><h2 id="workflow-title">One process. Two review tracks.</h2></div><p>Every request is subject to review.<br />An expedited track does not guarantee approval.</p></div>
        <div className={styles.tracks}>
          <div><span className={styles.trackTag}>EXPEDITED</span><p>Urgent need <strong>with character testimony.</strong></p></div>
          <div><span className={styles.trackTag}>REGULAR</span><p>No recommender, non-urgent need, or <strong>fuller assessment required.</strong></p></div>
        </div>
        <ol className={styles.flow}>
          {steps.map(([title, owner, text], index) => <li key={title}><span className={styles.number}>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><span className={styles.owner}>{owner}</span><p>{text}</p></li>)}
        </ol>
      </section>

      <section id="governance" className={styles.governance} aria-labelledby="governance-title">
        <div className={styles.sectionHead}><div><p className={styles.eyebrow}>03 / STEWARDSHIP</p><h2 id="governance-title">Clear decisions. Protected resources.</h2></div></div>
        <div className={styles.safeguards}>
          <article className={styles.votes}><div className={styles.stat}>2 <span>of</span> 3</div><h3>Votes for routine approval</h3><ul><li>Associate Dean of Student Affairs</li><li>Director, Student Success Center</li><li>Academic Support Coordinator</li></ul></article>
          <article className={styles.budget}><div className={styles.stat}>80<span>%</span></div><h3>Of confirmed annual donations</h3><p>Forms the current-year aid budget. The existing source fund is protected; the budget is not calculated from the total source-fund balance.</p></article>
          <article className={styles.privacy}><span className={styles.smallLabel}>ACCOUNTABLE SUPPORT</span><h3>Need-based.<br />Confidential.<br />Within available funds.</h3><p>Decisions consider verified need, urgency, and program priorities. Application information is accessible only to authorized personnel.</p></article>
        </div>
        <DonationCalculator />
      </section>
      <footer className={styles.footer}><span>LSWP AID <span> / </span> Administrator overview</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
