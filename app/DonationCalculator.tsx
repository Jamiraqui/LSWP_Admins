"use client";

import { useState } from "react";
import styles from "./page.module.css";

const currency = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" });

export default function DonationCalculator() {
  const [amount, setAmount] = useState("100000");
  const value = Number(amount);
  const valid = amount.trim() !== "" && Number.isFinite(value) && value >= 0 && value <= 1000000000000;
  const cents = Math.round(value * 100);
  const aidCents = Math.round(cents * 0.8);
  const display = (cents: number) => valid ? currency.format(cents / 100) : "—";

  return (
    <div className={styles.calculator} aria-labelledby="calculator-title">
      <div>
        <p className={styles.eyebrow}>ANNUAL DONATION CALCULATOR</p>
        <h3 id="calculator-title">See the annual allocation</h3>
        <label htmlFor="annual-donations">Confirmed unrestricted annual donations (PHP)</label>
        <input id="annual-donations" type="number" min="0" max="1000000000000" step="0.01" inputMode="decimal" value={amount} onChange={event => setAmount(event.target.value)} aria-invalid={!valid} aria-describedby="donation-help" />
        <p id="donation-help">{valid ? "Illustrative amount. Change it to calculate your allocation." : "Enter an amount from ₱0 to ₱1,000,000,000,000."}</p>
      </div>
      <div className={styles.results} aria-live="polite" aria-atomic="true">
        <div><span>80% · Current-year aid budget</span><output htmlFor="annual-donations">{display(aidCents)}</output></div>
        <div><span>20% · Sustainability reserve</span><output htmlFor="annual-donations">{display(cents - aidCents)}</output></div>
        <p>Annual donations × 80% = aid budget. The existing source-fund balance is excluded. Restricted donations follow donor intent.</p>
      </div>
    </div>
  );
}
