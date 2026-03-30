import { HomePageClient } from "@/components/home/home-page-client";
import { HeroSection } from "@/components/home/hero-section";
import { site } from "@/config/site";

/** Negative margin only — padding lives on `<HeroSection>` so gradients/ambience paint under the transparent nav. */
const heroPullUnderNav = "-mt-[calc(4rem+env(safe-area-inset-top,0px))]";

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.shortTitle,
  url: "https://icami.net",
  email: site.contactEmail,
};

const jsonLdEvent = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: `${site.shortTitle} — ${site.fullTitle}`,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  startDate: site.eventStartDate,
  endDate: site.eventEndDate,
  location: {
    "@type": "Place",
    name: site.location,
    address: {
      "@type": "PostalAddress",
      addressCountry: "MY",
    },
  },
  organizer: {
    "@type": "Organization",
    name: site.shortTitle,
    url: "https://icami.net",
  },
  url: "https://icami.net",
  description: site.tagline,
};

export default function HomePage() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
      />
      <div className={`relative z-0 bg-[#02040c] ${heroPullUnderNav}`}>
        <HeroSection />
      </div>
      <div className="bg-slate-100">
        <HomePageClient />
      </div>
    </>
  );
}
