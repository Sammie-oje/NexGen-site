import Card from "../ui/Card.jsx";

const FOOTER_LINKS = [
  {
    header: "Home",
    links: [
      { name: "Why Us", status: "active" },
      { name: "About Us", status: "active" },
      { name: "Testimonials", status: "active" },
      { name: "FAQ's", status: "active" },
    ],
  },
  {
    header: "Services",
    links: [
      { name: "Web Development", status: "active" },
      { name: "App Development", status: "active" },
      { name: "Web Design", status: "active" },
      { name: "Digital Marketing", status: "active" },
    ],
  },
  {
    header: "Projects",
    links: [
      { name: "Klothink", status: "active" },
      { name: "Zenith", status: "active" },
      { name: "Novus", status: "active" },
      { name: "Apex", status: "active" },
    ],
  },
  {
    header: "Blogs",
    links: [
      { name: "Business", status: "active" },

      { name: "Design", status: "inactive" },
      { name: "Development", status: "inactive" },
    ],
  },
];

function Links({ header, links }) {
  return (
    <div className="flex flex-1 flex-col gap-4 ">
      <h3 className="text-orange-90 text-[18px] font-roboto-mono font-bold">
        {header}
      </h3>
      <ul className="flex flex-col gap-1 font-regular font-roboto-flex text-[14px] text-neutral-50">
        {links.map(({ name, status }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}

function FooterLinks() {
  return (
    <Card>
      <nav className="flex gap-8 flex-wrap" aria-label="Footer navigation">
        {FOOTER_LINKS.map((footerLinks) => (
          <Links {...footerLinks} />
        ))}
      </nav>
    </Card>
  );
}

export default FooterLinks;
