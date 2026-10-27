import CTASection from "../ui/CTASection.jsx";
import Ticker from "../ui/Ticker.jsx";
import Socials from "../ui/Socials.jsx";
import Card from "../ui/Card.jsx";

const TICKER_TEXTS = [
  "Follow us on social media",
  "Follow us on social media",
  "Follow us on social media",
  "Follow us on social media",
  "Follow us on social media",
];

function Footer() {
  return (
    <footer className="mt-12 flex flex-col gap-1">
      <CTASection />
      <Ticker styles="bg-neutral-10 w-full" texts={TICKER_TEXTS} />
      <Socials />
    </footer>
  );
}

export default Footer;
