export function getInquiryDeliveryConfig() {
  const url = process.env.INQUIRY_WEBHOOK_URL;
  const token = process.env.INQUIRY_WEBHOOK_TOKEN?.trim();
  if (!url || !token) return;

  try {
    const endpoint = new URL(url);
    if (endpoint.protocol === "https:" && !endpoint.username && !endpoint.password && !endpoint.hash) {
      return { endpoint, token };
    }
  } catch {
    return;
  }
}
