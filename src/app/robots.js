export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://icami.net/sitemap.xml",
    host: "https://icami.net",
  };
}
