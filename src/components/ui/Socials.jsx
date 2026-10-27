import Card from "./Card.jsx";
import Instagram from "../../assets/images/instagram.svg?react";
import Twitter from "../../assets/images/twitter.svg?react";
import Dribble from "../../assets/images/dribble.svg?react";
import Behance from "../../assets/images/behance.svg?react";

const SOCIAL_ICONS = {
  instagram: <Instagram />,
  twitter: <Twitter />,
  dribble: <Dribble />,
  behance: <Behance />,
};

function Socials() {
  return (
    <div className="flex gap-1">
      {Object.entries(SOCIAL_ICONS).map(([name, icon]) => (
        <Card key={name} styles="p-3 rounded-2 w-full border border-neutral-20">
          {icon}
        </Card>
      ))}
    </div>
  );
}

export default Socials;
