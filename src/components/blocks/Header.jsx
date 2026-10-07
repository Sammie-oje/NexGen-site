import { ArrowUpRight } from "lucide-react";
import CardContainer from "../ui/CardContainer.jsx";
import Card from "../ui/Card.jsx";
import Hero from "./Hero.jsx";

const STATS = [
  { label: "Clients", value: "200+" },
  { label: "Projects", value: "280+" },
  { label: "Happy Clients", value: "100%" },
  { label: "Followers", value: "420k" },
];

function Stat({ label, value }) {
  return (
    <dl className="contents">
      <dt className="text-neutral-70 uppercase font-roboto-mono font-medium text-[14px]">
        {label}
      </dt>
      <dd className="text-orange-70 font-roboto-flex font-semibold text-[40px]">
        {value}
      </dd>
    </dl>
  );
}

function Header() {
  return (
    <header className="flex flex-col gap-4">
      <Hero />

      <CardContainer>
        {STATS.map((stat) => (
          <Card type={"small"} key={stat.label}>
            <Stat label={stat.label} value={stat.value} />
          </Card>
        ))}

        <Card type={"small"} styles={"col-span-full p-4"}>
          <Stat label={"Years of Experience"} value={"10+"} />
        </Card>

        <Card type={"small"} styles={"col-span-full p-4"}>
          <button className="flex justify-center items-center gap-1">
            <div className="flex p-3 bg-neutral-06 rounded-pill">
              <ArrowUpRight className="text-orange-70" />
            </div>
            <span className="text-neutral-70 uppercase font-roboto-mono font-medium text-[14px]">
              KNOW MORE
            </span>
          </button>
        </Card>
      </CardContainer>
    </header>
  );
}
export default Header;
