"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!name) {
    fieldErrors.name = "Please enter your name.";
  }
  if (!email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!message) {
    fieldErrors.message = "Please enter a message.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the fields below and try again.",
      fieldErrors,
    };
  }

  // TODO: Wire in a real email/CRM provider here (e.g., Resend, SendGrid, or
  // Formspree). Until then, submissions are only logged server-side.
  console.log("BRACEWorks contact form submission:", {
    name,
    email,
    organization: organization || undefined,
    message,
    submittedAt: new Date().toISOString(),
  });

  return {
    status: "success",
    message: "Thanks for reaching out. We'll get back to you soon.",
  };
}
