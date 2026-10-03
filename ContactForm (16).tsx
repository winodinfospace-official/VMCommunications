"use client";

import { useState } from "react";

const fieldClass =
  "w-full bg-transparent border-b border-ink/20 focus:border-gold outline-none py-3 text-ink placeholder:text-ink/35 transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire to real submission endpoint (email service / API route) before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-ink/10 p-10">
        <p className="font-display text-2xl text-ink font-light">Thank you.</p>
        <p className="text-ink/60 text-sm mt-3">We&apos;ve received your enquiry and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid sm:grid-cols-2 gap-7">
        <input required name="name" placeholder="Name" className={fieldClass} />
        <input required type="email" name="email" placeholder="Email" className={fieldClass} />
      </div>
      <div className="grid sm:grid-cols-2 gap-7">
        <input name="phone" placeholder="Phone" className={fieldClass} />
        <input name="organization" placeholder="Organization" className={fieldClass} />
      </div>
      <input name="service" placeholder="Service Required" className={fieldClass} />
      <textarea required name="message" placeholder="Message" rows={5} className={fieldClass} />
      <button type="submit" className="btn-gold bg-gold text-navy text-sm font-medium px-7 py-3.5 tracking-wide">
        <span>Send Enquiry</span>
      </button>
    </form>
  );
}
