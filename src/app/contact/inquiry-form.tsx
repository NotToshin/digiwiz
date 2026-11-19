"use client";

import { useActionState, useState } from "react";
import { submitInquiry } from "./actions";

export function InquiryForm({ enabled }: { enabled: boolean }) {
  const [state, action, pending] = useActionState(submitInquiry, { status: "idle" as const, message: "" });

  // Keep the inquiry in the form when the server returns a delivery or validation error.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <form action={action} className="inquiry-form">
      {!enabled && <p className="note">Online inquiries are currently unavailable. Please check back later.</p>}
      {state.status === "success" ? (
        <p role="status">{state.message}</p>
      ) : (
        <fieldset disabled={!enabled || pending}>
          <legend>Project inquiry</legend>
          <label>Name<input name="name" value={name} onChange={(event) => setName(event.target.value)} required maxLength={120} autoComplete="name" /></label>
          <label>Email<input name="email" value={email} onChange={(event) => setEmail(event.target.value)} required type="email" maxLength={254} autoComplete="email" /></label>
          <label>Tell us about your project<textarea name="project" value={project} onChange={(event) => setProject(event.target.value)} required minLength={20} maxLength={3000} rows={6} /></label>
          <div hidden><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
          <label className="inquiry-consent"><input type="checkbox" name="consent" value="yes" checked={consent} onChange={(event) => setConsent(event.target.checked)} required /> I agree to be contacted about this inquiry.</label>
          <button className="button" type="submit">{pending ? "Sending…" : "Send inquiry"}</button>
        </fieldset>
      )}
      {state.status === "error" && <p role="alert">{state.message}</p>}
    </form>
  );
}
