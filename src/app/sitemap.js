const BASE_URL = "https://icami.net";

const routes = [
  "/",
  "/call-for-papers",
  "/tracks",
  "/submission",
  "/camera-ready",
  "/presentation-guidelines",
  "/important-dates",
  "/program",
  "/keynotes",
  "/workshops",
  "/registration",
  "/registration/fees",
  "/registration/guidelines",
  "/venue",
  "/sponsors",
  "/awards",
  "/accepted-papers",
  "/faq",
  "/code-of-conduct",
  "/organizing-committee",
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
