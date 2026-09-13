"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-slate disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <form action={formAction} noValidate className="max-w-xl">
      <div className="mb-5">
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(state.fieldErrors?.name)}
          aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
          className="w-full rounded-md border border-brand-border bg-white px-4 py-2.5 text-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
        />
        {state.fieldErrors?.name && (
          <p id="name-error" className="mt-1.5 text-sm text-red-700">
            {state.fieldErrors.name}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(state.fieldErrors?.email)}
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
          className="w-full rounded-md border border-brand-border bg-white px-4 py-2.5 text-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
        />
        {state.fieldErrors?.email && (
          <p id="email-error" className="mt-1.5 text-sm text-red-700">
            {state.fieldErrors.email}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="organization" className="mb-1.5 block text-sm font-medium text-brand-ink">
          Organization <span className="font-normal text-brand-muted">(optional)</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          className="w-full rounded-md border border-brand-border bg-white px-4 py-2.5 text-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
          className="w-full rounded-md border border-brand-border bg-white px-4 py-2.5 text-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
        />
        {state.fieldErrors?.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-700">
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      <SubmitButton />

      <div role="status" aria-live="polite" className="mt-5">
        {state.status === "success" && (
          <p className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            {state.message}
          </p>
        )}
        {state.status === "error" && (
          <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
