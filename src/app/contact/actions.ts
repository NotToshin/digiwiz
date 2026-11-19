"use server";

import { getInquiryDeliveryConfig } from "./delivery-config";

type InquiryState = { status: "idle" | "error" | "success"; message: string };

const deliveryAttempts: number[] = [];

export async function submitInquiry(_: InquiryState, data: FormData): Promise<InquiryState> {
  const error = (message: string): InquiryState => ({ status: "error", message });
  const read = (key: string) => {
    const value = data.get(key);
    return typeof value === "string" ? value.trim() : "";
  };

  const name = read("name");
  const email = read("email");
  const project = read("project");
  if (read("website") || data.get("website") instanceof File) return error("Unable to submit this inquiry.");
  if (!name || name.length > 120 || email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      project.length < 20 || project.length > 3000 || read("consent") !== "yes") {
    return error("Enter your name, a valid email, and 20 to 3,000 characters about your project. Confirm your consent before sending.");
  }

  const delivery = getInquiryDeliveryConfig();
  if (!delivery) return error("Inquiry delivery is unavailable.");
  const { endpoint, token } = delivery;

  const now = Date.now();
  while (deliveryAttempts.length && deliveryAttempts[0] <= now - 60_000) deliveryAttempts.shift();
  if (deliveryAttempts.length >= 10) return error("Too many requests. Try again in a minute.");
  deliveryAttempts.push(now);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ name, email, project, consent: true }),
      redirect: "error",
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return error("We couldn't send your inquiry. Try again shortly.");
    return { status: "success", message: "Your inquiry was sent." };
  } catch {
    return error("We couldn't send your inquiry. Try again shortly.");
  }
}
