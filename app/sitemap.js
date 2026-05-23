import type { MetadataRoute } from "next";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const routes = ["", "/about", "/apps", "/projects", "/certificates", "/pricing", "/blog", "/testimonials", "/faq-contact", "/myanmar"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
