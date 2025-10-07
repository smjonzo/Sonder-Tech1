export function createPageUrl(pageName) {
  if (!pageName || typeof pageName !== "string") {
    return "/";
  }

  const normalized = pageName.trim().toLowerCase();
  if (!normalized || normalized === "home") {
    return "/";
  }

  return `/${normalized}`;
}
