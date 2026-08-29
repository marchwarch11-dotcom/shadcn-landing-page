export const getWhatsAppHref = (
  phoneE164: string | null,
  message?: string,
): string | null => {
  if (!phoneE164) {
    return null;
  }

  const digits = phoneE164.replace(/\D/g, "");

  if (!digits) {
    return null;
  }

  const url = new URL(`https://wa.me/${digits}`);

  if (message) {
    url.searchParams.set("text", message);
  }

  return url.toString();
};
