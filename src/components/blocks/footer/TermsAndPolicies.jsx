import Card from "./Card.jsx";

function TermsAndPolicies() {
  return (
    <Card styles="gap-y-5 text-[14px] font-roboto-mono font-regular text-neutral-70">
      <p>© 2024 NexGen. All rights reserved.</p>
      <div className="flex flex-col gap-5 w-full text-center">
        <span>Terms & Conditions</span>
        <hr className="border border-neutral-15" />
        <span>Privacy Policy</span>
      </div>
    </Card>
  );
}

export default TermsAndPolicies;
